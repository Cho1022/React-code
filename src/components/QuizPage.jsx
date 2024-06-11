import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClockComponent from './ClockComponent';
import Swal from 'sweetalert2';



function QuizPage() {
  const [answers, setAnswers] = useState({
    time1: '',
    minute1: '',
    time2: '',
    minute2: '',
    time3: '',
    minute3: '',
  });
  const navigate = useNavigate();

  const handleTimeSelect = (index, h, m) => {
    const newAnswers = { ...answers };
    newAnswers[`time${index}`] = `${h}시`;
    newAnswers[`minute${index}`] = `${m}분`;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctAnswers = {
      time1: '11시',
      minute1: '30분',
      time2: '12시',
      minute2: '00분',
      time3: '2시',
      minute3: '25분',
    };

    let correctCount = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key] === correctAnswers[key]) {
        correctCount += 1;
      }
    });

    let message = '';
    if (correctCount === 1) {
      message = '1문제 정답입니다.';
    } else if (correctCount === 2) {
      message = '2문제 정답입니다.';
    } else if (correctCount === 3) {
      message = '모두 맞히셨습니다.';
    } else {
      message = '오답입니다.';
    }

    Swal.fire({
      title: 'Alert가 실행되었습니다.',
      text: message,
      icon: correctCount === 3 ? 'success' : 'error',
    });
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  return (
    <div className="quiz-page">
      <header>
        <h1>인지 중재 치료</h1>
      </header>
      <main>
        <div className="question-container">
          <div className="question">
            <ClockComponent onTimeSelect={(h, m) => handleTimeSelect(1, h, m)} />
            <p>
              승희는 외출을 준비하고{' '}
              <input
                type="text"
                value={answers.time1}
                onChange={(e) =>
                  setAnswers({ ...answers, time1: e.target.value })
                }
              />
              시{' '}
              <input
                type="text"
                value={answers.minute1}
                onChange={(e) =>
                  setAnswers({ ...answers, minute1: e.target.value })
                }
              />
              분 친구들과 점심약속을 위해 강남역에 갔습니다.
            </p>
          </div>
   
        </div>
        <div className="button-container">
          <button className="submit-button" onClick={handleSubmit}>
            정답 확인
          </button>
          <button className="previous-button" onClick={handlePrevious}>
            이전으로
          </button>
        </div>
      </main>
    </div>
  );
}

export default QuizPage;

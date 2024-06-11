import React, { useState } from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const TimeInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TimeButton = styled.button`
  padding: 4px 8px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ClockComponent = ({ onTimeSelect }) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const handleHourClick = (h) => {
    setHour(h);
    onTimeSelect(h, minute);
  };

  const handleMinuteClick = (m) => {
    setMinute(m);
    onTimeSelect(hour, m);
  };

  return (
    <ClockContainer>
      <TimeInput>
        <TimeButton onClick={() => handleHourClick(hour - 1)}>-</TimeButton>
        <span>{hour}시</span>
        <TimeButton onClick={() => handleHourClick(hour + 1)}>+</TimeButton>
      </TimeInput>
      <TimeInput>
        <TimeButton onClick={() => handleMinuteClick(minute - 1)}>-</TimeButton>
        <span>{minute}분</span>
        <TimeButton onClick={() => handleMinuteClick(minute + 1)}>+</TimeButton>
      </TimeInput>
    </ClockContainer>
  );
};

export default ClockComponent;

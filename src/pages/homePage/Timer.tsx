import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components for Timer
const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 8px;
  max-width: 400px;
  margin: 20px auto;

  // Responsive styling
  @media (max-width: 768px) {
    border-color: #ff5722;
    padding: 10px;
  }
`;

const TimerText = styled.p`
  font-size: 24px;
  font-weight: bold;

  // Responsive font size
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.primary ? "#fff" : "#007bff")};
  background-color: ${(props) => (props.primary ? "#007bff" : "transparent")};
  border: 2px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    color: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#f0f0f0")};
  }

  // Responsive button styling
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

interface TimerProps {
  isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ isActive }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isActive) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else {
      if (timer) {
        clearInterval(timer);
      }
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isActive]);

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <TimerWrapper>
      <TimerText>Timer: {counter} seconds</TimerText>
      <Button onClick={handleReset} disabled={counter === 0} primary>
        Reset Timer
      </Button>
    </TimerWrapper>
  );
};

export default Timer;

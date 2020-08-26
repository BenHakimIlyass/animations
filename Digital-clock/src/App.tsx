import * as React from "react";
import "./styles.css";
import styled from "styled-components";
import DigitalCounter from "./digitalCounter";

const getTime = () => {
  var date = new Date();
  return {
    hours: Math.round(date.getHours()),
    minutes: Math.round(date.getMinutes()),
    seconds: date.getSeconds()
  };
};
const parseTime = (value: number, indicator: number) => {
  if (value.toString().length === 2)
    return parseInt(value.toString()[indicator], 16);
  return value;
};
const handlePairs = (value: number, fn: number) =>
  value.toString().length === 1 ? 0 : fn;

export default function App() {
  const [time, setTime] = React.useState<any>(getTime());
  const { hours, minutes, seconds } = time;

  React.useEffect(() => {
    let interval = setInterval(function () {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Container>
        <Slot value={hours} wrappDots />
        <Slot value={minutes} wrappDots />
        <Slot value={seconds} />
      </Container>
    </div>
  );
}
const Slot = ({ value, wrappDots }: { value: number; wrappDots?: boolean }) => (
  <>
    <SlotBox>
      <DigitalCounter counter={handlePairs(value, parseTime(value, 0))} />
      <DigitalCounter counter={parseTime(value, 1)} />
    </SlotBox>
    {wrappDots && (
      <div>
        <Circle />
        <Circle />
      </div>
    )}
  </>
);
const SlotBox = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
const Circle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 20px;
  margin: 8px 16px;
  background-color: white;
`;

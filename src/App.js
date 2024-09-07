import { useState } from "react";
import Flow from "./OnboardFlow";
import "./styles.css";

const StepOne = ({ onNext }) => {
  return (
    <>
      <h1>First</h1>
      <button
        onClick={() => {
          onNext({ name: "Tarlan" });
        }}
      >
        Next
      </button>
    </>
  );
};

const StepTwo = ({ onNext }) => {
  return (
    <>
      <h1>Second</h1>
      <button
        onClick={() => {
          onNext({ surname: "Javadzade" });
        }}
      >
        Finish
      </button>
    </>
  );
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({});

  const onNext = (stepData) => {
    setCurrentIndex((state) => state + 1);
    setData((state) => ({ ...state, ...stepData }));
  };

  const finishHandler = () => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Flow
        currentIndex={currentIndex}
        onNext={onNext}
        finishHandler={finishHandler}
      >
        <StepOne />
        <StepTwo />
      </Flow>
    </div>
  );
}

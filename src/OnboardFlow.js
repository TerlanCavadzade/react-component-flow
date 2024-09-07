import React, { useEffect } from "react";

const Flow = ({ children, currentIndex, onNext, finishHandler }) => {
  useEffect(() => {
    if (!React.isValidElement(children[currentIndex])) {
      finishHandler();
    }
  }, [currentIndex, finishHandler, children]);

  if (!React.isValidElement(children[currentIndex])) {
    return <h2>Finished</h2>;
  }
  return <div>{React.cloneElement(children[currentIndex], { onNext })}</div>;
};

export default Flow;

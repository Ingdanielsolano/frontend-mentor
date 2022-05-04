import React, { useState } from "react";
import ScoreThanks from "./components/ScoreThanks";
import SelectScore from "./components/SelectScore";

const Rating = () => {
  const [selectedScore, setSelectedScore] = useState();
  const [step, setStep] = useState("thanks");

  return (
    <div className="rating">
      <div className="card">
        {step === "select" && (
          <SelectScore
            setStep={setStep}
            setSelectedScore={setSelectedScore}
            selectedScore={selectedScore}
          />
        )}
        {step === "thanks" && (
          <ScoreThanks
            setStep={setStep}
            setSelectedScore={setSelectedScore}
            selectedScore={selectedScore}
          />
        )}
      </div>
    </div>
  );
};

export default Rating;

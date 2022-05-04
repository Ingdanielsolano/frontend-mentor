import StarIcon from "@public/images/icon-star.svg";
import Image from "next/image";
import { func, number } from "prop-types";
import React from "react";

const SelectScore = ({ setStep, setSelectedScore, selectedScore }) => {
  return (
    <>
      <div className="card__circle">
        <Image width="15" height="15" src={StarIcon} alt="Star rating icon" />
      </div>
      <h1 className="card__title">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating__rate">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={`score-item-${score}`}
            className={`rating__score rating__score${
              score === selectedScore ? "--selected" : ""
            }`}
            onClick={() => setSelectedScore(score)}
          >
            {score}
          </button>
        ))}
      </div>
      <button onClick={() => setStep("thanks")} className="card__submit">
        Submit
      </button>
    </>
  );
};

SelectScore.propTypes = {
  setStep: func.isRequired,
  setSelectedScore: func.isRequired,
  selectedScore: number.isRequired,
};

export default SelectScore;

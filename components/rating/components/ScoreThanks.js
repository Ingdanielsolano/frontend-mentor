import IlustrationThankYouSvg from "@public/images/illustration-thank-you.svg";
import Image from "next/image";
import React from "react";

const ScoreThanks = () => {
  return (
    <div className="score-thanks">
      <div className="score-thanks__thank-image-container">
        <Image
          className="score-thanks__thank__image"
          src={IlustrationThankYouSvg}
          layout="fill"
          alt="Thank you image"
        />
      </div>
      <h2 className="score-thanks__subtitle">
        You selected <span>4</span> out of <span>5</span>
      </h2>
      <h1 className="score-thanks__title">Thank you!</h1>
      <p className="score-thanks__description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ScoreThanks;

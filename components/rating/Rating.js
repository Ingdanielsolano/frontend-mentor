import React from "react";
import StarIcon from "../../public/images/icon-star.svg";

const Rating = () => (
  <div className="rating">
    <div className="card">
      <div className="card__circle">
        <img width="15" height="15" src={StarIcon} alt="Star rating icon" />
      </div>
      <h1 className="card__title">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating__rate">
        <button className="card__circle">1</button>
        <button className="card__circle">2</button>
        <button className="card__circle">3</button>
        <button className="card__circle">4</button>
        <button className="card__circle">5</button>
      </div>
      <button className="card__submit">Submit</button>
    </div>
  </div>
);

export default Rating;

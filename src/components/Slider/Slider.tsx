import "./slider.scss";
import { Button } from "../Button/Button";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__slide">
        <h1 className="slider__title">The Power of Simplicity</h1>
        <p className="slider__subtitle">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <Button variant="slider">Learn</Button>
      </div>
      <div className="slider__dots">
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot slider__dot--active"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
      </div>
    </div>
  );
};

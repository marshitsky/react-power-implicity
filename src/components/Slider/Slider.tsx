import "./slider.scss";
import { Button } from "../Button/Button";

export const Slider = () => {
  const filledEllipse =
    "https://raw.githubusercontent.com/marshitsky/imgsForDiplomaJS/681e522ba7677fdde3140c0ec9a6875560862879/Ellipse_filled.svg";
  const emptyEllipse =
    "https://raw.githubusercontent.com/marshitsky/imgsForDiplomaJS/681e522ba7677fdde3140c0ec9a6875560862879/Ellipse_empty.svg";

  return (
    <div className="slider">
      <div className="slider--slide">
        <p className="slider--slide--main-text">The Power of Simplicity</p>
        <p className="slider--slide--description">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <Button parent="slider--slide-">Learn</Button>
        <div className="slider--slide--ellipses">
          <a href="">
            <img src={emptyEllipse} alt="" />
          </a>
          <a href="">
            <img src={emptyEllipse} alt="" />
          </a>
          <a href="">
            <img src={filledEllipse} alt="" />
          </a>
          <a href="">
            <img src={emptyEllipse} alt="" />
          </a>
          <a href="">
            <img src={emptyEllipse} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

import { Button } from "../Button/Button";
import "./navigation.scss";

export const Navigation = () => {
  const navigationLogo =
    "https://raw.githubusercontent.com/marshitsky/imgsForDiplomaJS/0a78e2bb614df0b2bd3b09fbe1f3522f81bc8140/logo-pi.svg";
  const navButtons = [
    {
      link: "",
      label: "Features",
    },
    {
      link: "",
      label: "Partners",
    },
    {
      link: "",
      label: "Stories",
    },
  ];
  return (
    <div className="navigation">
      <img src={navigationLogo} alt="navigation logo " />
      <div className="navigation--nav">
        <ul className="navigation--nav--list">
          {navButtons.map(({ link, label }) => {
            return (
              <li className="navigation--nav--list--item">
                <a href={link}>{label}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <Button parent="navigation">Download for free</Button>
      <div className="navigation--nav--burger">
        <p className="navigation--nav--burger--line"></p>
        <p className="navigation--nav--burger--line"></p>
        <p className="navigation--nav--burger--line"></p>
      </div>
    </div>
  );
};

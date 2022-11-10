import { Button } from "../Button/Button";
import "./navigation.scss";
import { ReactComponent as LogoIcon } from "../assets/icons/apple-logo.svg";

export const Navigation = () => {
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
    <header className="header">
      <LogoIcon className="header__link-logo" />
      <nav className="header__nav">
        {navButtons.map(({ link, label }) => {
          return (
            <a href={link} className="header__nav-link" key={label}>
              {label}
            </a>
          );
        })}
      </nav>
      <Button variant="header">Download for free</Button>
      <div className="haeder__burger">
        <p className="haeder__burger-line"></p>
        <p className="haeder__burger-line"></p>
        <p className="haeder__burger-line"></p>
      </div>
    </header>
  );
};

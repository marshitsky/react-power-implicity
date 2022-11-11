import { Button } from "../Button/Button";
import "./navigation.scss";
import { ReactComponent as LogoIcon } from "../assets/icons/apple-logo.svg";
import { Twirl } from "hamburger-react";

export const Navigation = () => {
  const navigationLinks = [
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
        {navigationLinks.map(({ link, label }) => {
          return (
            <a href={link} className="header__nav-link" key={label}>
              {label}
            </a>
          );
        })}
      </nav>
      <Button variant="header">Download for free</Button>
      <Twirl color="#A0A3A7" size={43} rounded />
    </header>
  );
};

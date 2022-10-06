import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { cn as bem } from "@bem-react/classname";
import "./style.scss";

function Header({ images }) {
  const cn = bem("Header");
  const [isActive, setActive] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive(0);
        break;
      case "/participants":
        setActive(1);
        break;
      case "/research":
        setActive(2);
        break;
      case "/regional-partners":
        setActive(3);
        break;
      case "/team":
        setActive(4);
        break;
      default:
        console.log("H");
    }
  }, [location]);

  return (
    <div className={cn()}>
      <Link to="/">
        <img src={images["logo-Sk.png"]} alt="" />
      </Link>
      <img
        src={images["button.png"]}
        alt=""
        className={
          isActive === 0 || isActive === 3
            ? cn("button-img")
            : cn("button-img-hidden")
        }
      />
      <Button />{" "}
      {/* todo: костыль. без него почему-то первая кнопка игнорирует стили.*/}
      <Button
        onClick={() => {
          navigate("/");
        }}
        className={isActive === 0 ? cn("active-link") : cn("inactive-link")}
      >
        Региональные операторы и представители
      </Button>
      <Button
        onClick={() => {
          navigate("/participants");
        }}
        className={isActive === 1 ? cn("active-link") : cn("inactive-link")}
      >
        Участники проекта Sk
      </Button>
      <Button
        onClick={() => {
          navigate("/research");
        }}
        className={isActive === 2 ? cn("active-link") : cn("inactive-link")}
      >
        R&D маркет
      </Button>
      <Button
        onClick={() => {
          navigate("/regional-partners");
        }}
        className={isActive === 3 ? cn("active-link") : cn("inactive-link")}
      >
        Региональные индустриальные партнеры
      </Button>
      <Button
        onClick={() => {
          navigate("/team");
        }}
        className={isActive === 4 ? cn("active-link") : cn("inactive-link")}
      >
        Команда
      </Button>
    </div>
  );
}

export default React.memo(Header);

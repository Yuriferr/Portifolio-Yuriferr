import * as React from "react";
import "./header.scss";

import Logo from "../../assets/logoBranca.png";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { FiMenu } from "react-icons/fi";

export default ({ white }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={white ? "header" : ""}>
      <div className="container-logo">
        <img src={Logo} />
      </div>
      <div className="container-links">
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contatos</a>
      </div>
      <div className="menu">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <FiMenu size={30} color="white"/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
        <a href="#about"><MenuItem onClick={handleClose}>Sobre</MenuItem></a>
        <a href="#projects"><MenuItem onClick={handleClose}>Projetos</MenuItem></a>
        <a href="#contact"><MenuItem onClick={handleClose}>Contatos</MenuItem></a>
        </Menu>
      </div>
    </header>
  );
};

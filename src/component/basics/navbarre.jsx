import { Icon } from "@rsuite/icons";
import { FaHome, FaSearch } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";

export default function NavBarre() {
  return (
    <div className="nav-barre">
      <legend>
        <Icon as={AiOutlineMenuFold} size="25px" color="white" />
      </legend>
      <div className="nav-list">
        <div>
          <Link to="/home" className="link">
            <Icon as={FaHome} size="30px" color="white" />
            <span>Accueil</span>
          </Link>
        </div>
        <div>
          <Link to="/search" className="link">
            <Icon
              as={FaSearch}
              color="#F5F5F5"
              size="30px"
              className="icon-search"
            />
            <span>Recherche</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

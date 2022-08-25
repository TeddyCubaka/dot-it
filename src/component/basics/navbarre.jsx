import { Icon } from "@rsuite/icons";
import { FaHome, FaSearch } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import React from "react";

export default function NavBarre() {
  return (
    <div className="nav-barre bg-light">
      <legend>
        <Icon as={AiOutlineMenuFold} size="25px" color="white" className="icon-legend"/>
      </legend>
      <div className="nav-list disp-flex-col">
        <div className="zooming">
          <Link to="/home" className="link disp-flex-nowrap">
            <Icon as={FaHome} size="30px" color="white" className="icon-search" />
            <span className="hide strong">Accueil</span>
          </Link>
        </div>
        <div className="zooming">
          <Link to="/search" className="link disp-flex-nowrap">
            <Icon as={FaSearch} color="#F5F5F5" size="30px" className="icon-search"/>
            <span className="hide strong">Recherche</span>
          </Link>
        </div>
        <div className="zooming">
          <Link to="/loader" className="link disp-flex-nowrap">
            <Icon as={ CgProfile } color="#F5F5F5" size="30px" className="icon-search"/>
            <span className="hide strong">artistes</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Icon } from "@rsuite/icons";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function NavBarre() {
  const [navClassName, setNavClassName] = useState("nav-barre bg-light");
  return (
    <div className={navClassName}>
      <legend onClick={()=>{
        navClassName == "nav-barre bg-light" ?  setNavClassName("nav-barre bg-light nav-barre-clique") : setNavClassName("nav-barre bg-light");
      }}>
        <Icon as={AiOutlineMenuFold} size="25px" color="white" className="icon-legend"/>
      </legend>
      <div className="nav-list disp-flex-col disp-flex-col-mobile ">
        <div className="zooming">
          <Link to="/home" className="link disp-flex-nowrap">
            <Icon as={FaHome} size="30px" color="white" className="icon-search hide-mobile" />
            <span className="hide strong">Accueil</span>
          </Link>
        </div>
        <div className="zooming">
          <Link to="/search" className="link disp-flex-nowrap">
            <Icon as={FaSearch} color="#F5F5F5" size="30px" className="icon-search hide-mobile"/>
            <span className="hide strong">Recherche</span>
          </Link>
        </div>
        <div className="zooming">
          <Link to="/library" className="link disp-flex-nowrap">
            <Icon as={ BiLibrary } color="#F5F5F5" size="30px" className="icon-search hide-mobile"/>
            <span className="hide strong">Bibiothèque</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

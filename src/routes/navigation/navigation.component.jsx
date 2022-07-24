import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as Clothlogo}  from "../../assets/Logo.svg";

import "./navigation.styles.scss"
const Navigation = () =>{
    return(
      <Fragment>
        <div className="navigation">
            <Link className = "logo-container"  to = "/" >
                 <Clothlogo  className= 'logo' /> 
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to = "/Shop"> SHOP </Link>
            <Link className="nav-link" to = "/auth"> SIGN IN </Link>
          </div> 
        </div>

        <Outlet />
      </Fragment>
    )
  }
  export default Navigation;
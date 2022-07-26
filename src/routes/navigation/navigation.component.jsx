import { Fragment , useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {ReactComponent as Clothlogo}  from "../../assets/Logo.svg";
import { signOutUser } from "../../utils/firebase/firbase.utils";

import "./navigation.styles.scss"
const Navigation = () =>{
  const {currentUser,} = useContext(UserContext); 


    return(
      <Fragment>
        <div className="navigation">
            <Link className = "logo-container"  to = "/" >
                 <Clothlogo  className= 'logo' /> 
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to = "/Shop"> SHOP </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>
                  {''}SIGN OUT{''}</span>)
                :
                (<Link className="nav-link" to = "/auth"> SIGN IN </Link>
                )
            }
          </div> 
        </div>

        <Outlet />
      </Fragment>
    )
  }
  export default Navigation;
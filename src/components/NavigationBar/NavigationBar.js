import React from "react";
import Home from "../../assets/home.png";
import classes from "./NavigationBar.module.css";

const Navigationbar=()=>
{
   return(
    <div className={classes.outer}>
         <div className={classes.left}>
            <div className={classes.navLink} style={{pointerEvents:"none"}}><img src={Home}></img></div>
            <div className={classes.navLink}>Rent</div>
            <div className={classes.navLink}>Buy</div>
            <div className={classes.navLink}>Sell</div>
            <div className={classes.navLink}>Manage Property</div>
            <div className={classes.navLink}>Resources</div>
         </div>
         <div className={classes.right}>
            <button className={classes.authButton}>Login</button>
            <button className={classes.authButton}>Signup</button>
         </div>
    </div> 
   );
}

export default Navigationbar;
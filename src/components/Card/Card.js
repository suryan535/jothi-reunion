import React from "react";
import classes from "./Card.module.css";
import Area from "../../assets/area.png";
import Bedroom from "../../assets/bed.png";
import Bathroom from "../../assets/bathroom.png";

const Card=(props)=>
{
   return(
      <div className={classes.outer}>
        <div className={classes.propImage}>
            <img src={props.data.image} style={{width:"100%",height:"280px"}}></img>
        </div>
        <div className={classes.content}>
            <div className={classes.price}>{`$ ${props.data.price}`}</div>
            <div className={classes.location}>{props.data.location}</div>
            <div className={classes.address}>{props.data.address}</div>
        </div>
        <div className={classes.description}>
            <div className={classes.descriptionInner}>
                <img src={Bedroom} style={{width:"25px",height:"25px"}}></img>
                <div className={classes.descriptionText}>
                    {`${props.data.bed} Beds`}
                </div>
            </div>
            <div className={classes.descriptionInner}>
                <img src={Bathroom} style={{width:"25px",height:"25px"}}></img>
                <div className={classes.descriptionText}>
                    {`${props.data.bathroom} Bathroom`}
                </div>
            </div>
            <div className={classes.descriptionInner}>
                <img src={Area} style={{width:"25px",height:"25px"}}></img>
                <div className={classes.descriptionText}>
                    {props.data.area}
                </div>
            </div>
         </div>
      </div>
   );
}

export default Card;
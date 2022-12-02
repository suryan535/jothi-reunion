import React,{createContext} from "react";
import House1 from "./assets/house1.jpg";
import House2 from "./assets/house2.jpg";
import House3 from "./assets/house3.jpg";
import House4 from "./assets/house4.jpg";

/*
const DUMMY=[
    {
        id:1,
        location:"New York",
        image:House1,
        moveIn:">1 Month",
        address:"Green Valley Highland",
        price:700,
        bed:5,
        bathroom:4,
        area:"6x5.6 m2",
        propType:"House"
    },
    {
        id:2,
        location:"Karnataka",
        image:House2,
        moveIn:"Immediately",
        address:"Green Valley Highland",
        price:900,
        bed:7,
        bathroom:1,
        area:"7x5.4 m2",
        propType:"Villa"
    },
    {
        id:3,
        location:"London",
        moveIn:">1 Month",
        image:House3,
        address:"Green Valley Highland",
        price:1600,
        bed:2,
        bathroom:5,
        area:"8x6.2 m2",
        propType:"Villa"
    },
    {
        id:4,
        location:"New York",
        image:House4,
        moveIn:"Immediately",
        address:"Green Valley Highland",
        price:1800,
        bed:5,
        bathroom:2,
        area:"8.3x6 m2",
        propType:"House"
    },
    {
        id:5,
        location:"London",
        moveIn:"Immediately",
        image:House1,
        address:"Green Valley Highland",
        price:2580,
        bed:7,
        bathroom:4,
        area:"6.3x6 m2",
        propType:"Villa"
    },
    {
        id:6,
        location:"Karnataka",
        moveIn:">1 Month",
        image:House2,
        address:"Green Valley Highland",
        price:3000,
        bed:2,
        bathroom:4,
        area:"5x7.5 m2",
        propType:"House"
    },
    {
        id:7,
        location:"Karnataka",
        moveIn:">1 Month",
        image:House3,
        address:"Green Valley Highland",
        price:4800,
        bed:5,
        bathroom:3,
        area:"5x7.5 m2",
        propType:"House"
    },
    {
        id:8,
        location:"London",
        moveIn:"Immediately",
        image:House4,
        address:"Green Valley Highland",
        price:1680,
        bed:3,
        bathroom:4,
        area:"8.2x6 m2",
        propType:"Villa"
    },

]*/

const loc=["New York","Karnataka","London"];
const prop=["House","Villa","Apartment"];
const move=[">1 Month","Immediately"];
const img=[House1,House2,House3,House4];

let DUMMY=[];

for(let i=0;i<1000;i++)
{
    let locRand=Math.floor(Math.random()*3);
    let propRand=Math.floor(Math.random()*3);
    let priceRand=Math.floor(Math.random()*3);
    let moveRand=Math.floor(Math.random()*2);
    let houseRand=Math.floor(Math.random()*4);

    let currPrice;
    if(priceRand===0)
    {
       currPrice=Math.floor((Math.random()*1500)+500);
    }else if(priceRand===1)
    {
        currPrice=Math.floor((Math.random()*2500)+1500);
    }else
    {
        currPrice=Math.floor((Math.random()*10000)+2500);
    }


    DUMMY.push({
        id:i+1,
        location:loc[locRand],
        moveIn:move[moveRand],
        image:img[houseRand],
        address:"Green Valley Highland",
        price:currPrice,
        bed:Math.floor((Math.random()*6)+2),
        bathroom:Math.floor((Math.random()*4)+1),
        propType:prop[propRand],
        area:`${Math.floor((Math.random()*10)+4)} x ${Math.floor((Math.random()*10)+4)} m2`
    })
}

const DataContext=createContext(DUMMY);
export default DataContext;
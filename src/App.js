import React,{ useContext,useState } from 'react';
import classes from './App.module.css';
import DataContext from './DataContext';
import Card from "./components/Card/Card.js";
import NavigationBar from './components/NavigationBar/NavigationBar';


function App() {
  const DUMMY=useContext(DataContext);
  
  const [property,setProperty]=useState(DUMMY);
  const [filterCondition,setfilterCondition]=useState({
    location:"New York",
    moveIn:"Immediately",
    price:"Range1",
    propType:"House"
  });

  
  const locationChangeHandler=(e)=>
  {
     filterCondition.location=e.target.value;
     setfilterCondition(filterCondition);
  }

  const moveInChangeHandler=(e)=>
  {
   filterCondition.moveIn=e.target.value;
   setfilterCondition(filterCondition);
  }
  
  const priceChangeHandler=(e)=>
  {
    filterCondition.price=e.target.value;
    setfilterCondition(filterCondition);
  }

  const propTypeChangeHandler=(e)=>
  {
    filterCondition.propType=e.target.value;
    setfilterCondition(filterCondition);
  }

  const updateDataHandler=()=>
  {
    let newproperty=DUMMY.filter((item)=>
    {
      let ok=false;
      if(filterCondition.price==="Range1")
      {
        if(item.price>=500 && item.price<=1500) ok=true;
      }else if(filterCondition.price==="Range2")
      {
        if(item.price>=1501 && item.price<=2500) ok=true;
      }else
      {
         if(item.price>2500) ok=true;
      }

      return (item.location===filterCondition.location && item.moveIn===filterCondition.moveIn && item.propType===filterCondition.propType && ok);
    });
    setProperty(newproperty);
  }

  return (
    <div className="App">
      <NavigationBar/>
      <div className={classes.container}>
        <div className={classes.heading}>
          Search Properties To Rent
        </div>
        <div className={classes.filter}>
          <div className={classes.filterInner}>
          <select className={classes.dropDown} id="location" onChange={(e)=>locationChangeHandler(e)}>
              <option value="New York">New York</option>
              <option value="Karnataka">Karnataka</option>
              <option value="London">London</option>
          </select>
          </div>
          <div className={classes.filterInner}>
          <select className={classes.dropDown} id="moveIn" onChange={(e)=>moveInChangeHandler(e)}>
              <option value=">1 Month">Above 1 Month</option>
              <option value="Immediately">Immediately</option>
          </select>
          </div>
          <div className={classes.filterInner}>
          <select className={classes.dropDown} id="price" onChange={(e)=>priceChangeHandler(e)}>
              <option value="Range1">$500 - $1500</option>
              <option value="Range2">$1501 - $2500</option>
              <option value="Range3">Above $2501</option>
          </select>
          </div>
          <div className={classes.filterInner}>
          <select className={classes.dropDown} id="propType" onChange={(e)=>propTypeChangeHandler(e)}>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
          </select>
          </div>
          <div className={classes.filterInner}>
            <button className={classes.search} onClick={updateDataHandler}>Search</button>
          </div>
        </div>
        <div className={classes.content}>
          {property.slice(0,Math.min(9,property.length)).map((item)=>
          {
            return(
              <Card
              key={item.id}
              data={item}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

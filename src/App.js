import React, {useState, useEffect} from 'react';
import './App.css'
import './MyBar.css'; 
import './MyCard.css'; 
import MyBar from './MyBar';
import MyCard from './MyCard';
var data = require('./attractions.json');

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.mecallapi.com/api/attractions/")
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
  },[])
  return (
    <>
      <MyBar/>
      <h1 style={{paddingLeft: "10px"}}>Attractions</h1>
      <div className='grid-container'> 
        {data.map(data => (
          <MyCard key={data.id} name={data.name} coverimage={data.coverimage} detail={data.detail}/>
        ))}
        {/* <MyCard name={data[0].name} coverimage={data[0].coverimage} detail={data[0].detail}/>
        <MyCard name={data[1].name} coverimage={data[1].coverimage} detail={data[1].detail}/>
        <MyCard name={data[2].name} coverimage={data[2].coverimage} detail={data[2].detail}/>
        <MyCard name={data[3].name} coverimage={data[3].coverimage} detail={data[3].detail}/> */}
      </div>
    </>
  );
}

export default App;

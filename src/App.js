import React, { Component, useState, useEffect } from 'react';
import {Graph} from './component/Graph' 
import axios from 'axios';

const PosthogApi = () => {
  const token = "phx_P6emKJcwmA62aa1qBxzzLaI1T37TFNScdvoVheBpOIV";
  
  const [xAxis, setXAxis] = useState();
  const [series, setSeries] = useState([]);
  const [legend, setLegend] = useState([]);
  
async function getData() {
    try {
      const response = await axios.get(`https://posthog.skara.live/api/projects/2/dashboards/7`,
          {
              "headers": {
                  "Authorization": `Bearer ${token}`,
                  "Content-Type": "application/json",
              }
          }
      );
      console.log("posthog response", response.data.items[9].result);
      const data = response.data.items[9].result
      setXAxis(data[0].labels)
      data.map((val)=>{
        // const obj = {name: val.labels, type:"line", stack:"Total",data: val.data}
        const obj = {name: val.label,type:"line",data: val.data}
        setSeries(series => [...series, obj])
        setLegend(legend => [...legend, val.label])
      })
  } catch (error) {
      console.error("error api fetch", error);
  }


}
useEffect(() => {
  getData()
}, [])

const series1 = []

// console.log("series", series);
console.log("legend", legend);

if (series === undefined){
  return(<h1>Loading</h1>)
}else{
  return (
    <>
      <div>
          Engagement trial 3
      </div>
      <div>
        <Graph  xAxis={xAxis} series={series} legend={legend} />
      </div>
      </>
  )
}


}


export default PosthogApi
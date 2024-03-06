import React from "react";
import { useRouter } from "next/router";
const WeatherApplication = (props)=>{
  const weatherdata = props.weatherdata;
  // const router = useRouter()
  // const { weatherdata } = router.query
    return(
    
          weatherdata.slice(0,31).map((val)=>{
            console.log(val.time);
            console.log(val.data.instant.details.air_temperature);

            return(<tr>
              <td>{ new Date(val.time).toLocaleString()}</td>
              <td>{val.data.instant.details.air_temperature.toFixed(1)}</td>
              <td>{val.data.next_1_hours.summary.symbol_code}</td>
              
          </tr>)
          })

    );
}
export default WeatherApplication;


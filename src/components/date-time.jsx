import React, { useState } from 'react'

function DateTime() {

  let day_arr=['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday' ]

  const [cdate , setCdate] = useState(new Date().toLocaleDateString())
  const [ctime , setCtime] = useState(new Date().toLocaleTimeString())
  const [day , setDay] = useState(new Date().getDay())
  
  const update = ()=>{
    let time=new Date().toLocaleTimeString()
    setCtime(time)

    let date=new Date().toLocaleDateString()
    setCdate(date)

    let temp_day = new Date().getDay()
    setDay(temp_day)
  }
  setInterval(update,1000)

  return (
    <h4>
      {ctime} <br />
      {day_arr[day]},{" "}
      {cdate}
    </h4>
  )
}

export default DateTime

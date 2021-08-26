import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {

  const [TimeData, setTimeData] = useState('');
  const [DateData, setDateData] = useState('');

  useEffect(() => {
    callInterval();
  }, [])

  const callInterval = () => {
    setNewDate(new Date())
    setInterval(() => {
      setNewTime()
    }, 1000);
  }

  const setNewTime = () => {
    let current = new Date(new Date());
    let currentHours = current.getHours();
    let hours = "";
    let am = ""
    if ((currentHours - 12) < 0) {
      hours = currentHours === 0 ? 12 : currentHours;
      am = "AM"
    } else {
      hours = currentHours === 12 ? 12 : currentHours - 12
      am = "PM"
    }
    hours = makeTwoDigit(hours);

    let mins = makeTwoDigit(current.getMinutes());
    let secs = makeTwoDigit(current.getSeconds());
    if (hours == 12 && mins == 0 && secs == 0) {
      setNewDate(current);
    }
    setTimeData(hours + ": " + mins + " : " + secs + " " + am)
  }

  const setNewDate = (date) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let day = makeTwoDigit(date.getDate());
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    console.log(day)
    setDateData(day + " " + month + " " + year)

  }
  const makeTwoDigit = data => {
    return String(data).padStart(2, '0');
  }


  return (
    <div>
      <Head>
        <title>My Yogi App</title>
      </Head>



      <div className="digiwatch">
        <div> {DateData}</div>
        <div> {TimeData}</div>
      </div>
    </div>


  )
}

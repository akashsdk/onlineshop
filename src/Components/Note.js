import React from 'react'
import { Progress, } from 'antd';
const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

export default function Note() {
  return (
    <div>
        <h2 style={{color:'aqua'}}>Note: </h2>
      <h3>This website is under maintenance,</h3>
      <h3>Sorry! for the temporary inconvenience.</h3>
      {/* <p>UI/UX Design: 70% done</p>
      <p>Front End: 15% done</p>
      <p>Back End: 0% done</p>
      <p>Admin Dashboard: 0% done</p>
      <p>Security: Processing... 0%</p>
      <p>QA Testing: Processing... 0%</p> */}
      <p style={{color:'red'}}>Status: Front End Developing</p>
      <p>Projer Time: 3 month.. </p>
      <div style={{width:'50%',marginLeft:'25%'}}>
        <p>Total Process...</p>
      <Progress  percent={23.0} strokeColor={twoColors} />

      </div>
    </div>
  )
}

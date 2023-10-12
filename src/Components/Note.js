import React from 'react'
import { Progress, Space } from 'antd';
const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};

export default function Note() {
  return (
    <div>
        <h2 style={{color:'aqua'}}>Note: </h2>
      <h3>This website is under maintenance,</h3>
      <h3>Sorry! for the temporary inconvenience.</h3>
      <h3>UI/UX Design: 70% done</h3>
      <h3>Front End: 15% done</h3>
      <h3>Back End: 0% done</h3>
      <h3>Admin Dashboard: 0% done</h3>
      <h3>Security: Processing... 0%</h3>
      <h3>QA Testing: Processing... 0%</h3>
      <h3 style={{color:'red'}}>Status: Front End Developing</h3>
      <h4>Projer Time: 3 month.. </h4>
      <div style={{width:'70%',marginLeft:'15%'}}>
        <p>Total Process...</p>
      <Progress  percent={9.0} strokeColor={twoColors} />

      </div>
    </div>
  )
}

import React from 'react'
import "./FlashSale.css";

import { Button, Flex, Statistic, } from 'antd';
const { Countdown } = Statistic;
const deadline = Date.now() + 250 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

export default function FlashSale() {
  return (
    <div className='flashSaleBody'>
        <div className='flashSaleLine'/>
        <Flex  justify='space-evenly' align='flex-start' style={{ marginTop:'-7px',}}>
            <h2 style={{color:'red'}}>On Sale Now</h2>
            <div style={{display:'flex', }}>
                <h2 style={{color:'red', }}>Ending In : </h2>
                <Countdown style={{marginTop:'12px'}} title="" value={deadline} onFinish={''} />
            </div>
        </Flex>
        <div className='flashSaleLine'/>
    </div>
  )
}

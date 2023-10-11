import React from 'react'
import "./ProductsCard.css";

import { Image, Button } from 'antd';

import walletMen from '../Image/Leather wallet for men.jpeg'

export default function ProductsCard() {
  return (
    
    <Button className='ProductsCardBody'>
            <Image height={170} width='90%' className='ProductsCardImage' src={walletMen}/>
            <div className='ProductsCardTextDiv'>
                <p className='ProductsCardText'>High quality Artificial <br/> Leather wallet for men</p>
            </div>
            <div className='ProductsCardBox'>
                <p className='ProductsCardPrice'>115 TK</p>
            </div>

    </Button>
  )
}

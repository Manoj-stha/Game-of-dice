import React from 'react'
import Dice from '../assets/dices.png'
import '../Components/Styles/Home.css'
import {Link} from 'react-router-dom'
import TypedText from './TypedText'
const Home = () => {
  return (
    <div className='flex items-center min-h-screen'>
        <div className='ml-[15rem] flex gap-[10rem]'>

      <img src={Dice} alt="" className='w-[50rem]'/>
      <div className='flex flex-col items-end justify-center gap-7'>
        <TypedText/>
        <button className='bg-black text-white w-[220px] h-[44px] shadow-lg hover:bg-white hover:text-black border-black border' id='play'><Link to='/game'>Play Now</Link></button>

      </div>
        </div>

    </div>
  )
}

export default Home

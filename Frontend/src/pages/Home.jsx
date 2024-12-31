import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null);
  const panelCLoseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
      if(panelOpen) {
        gsap.to(panelRef.current, {
          height: '70%',
        })
        gsap.to(panelCLoseRef.current, {
          opacity: '1',
        })
      }else{
        gsap.to(panelRef.current, {
          height: '0%',

        })
        gsap.to(panelCLoseRef.current, {
          opacity: '0',
        })
      }
    },[panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="../uber logo black.png"></img>

      <div className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s'></img>
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCLoseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute opacity-0 top-6 right-6 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-base w-full mt-5' type="text " placeholder='Add a pick-up location' />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-base w-full mt-3' type="text " placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className=' bg-red-500 h-0'>

        </div>
      </div>

    </div>
  )
}

export default Home
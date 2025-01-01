import React from 'react'

const LocationSearchPanel = (props) => {
    //sample array for locations

    const locations = [
        "24B, Near Kapoor's cafe, Aayush Sharma Home, Mandi",
        "34B, Near Sood's cafe, Aayush Sharma Home, Mandi",
        "45B, Near Singhai's cafe, Aayush Sharma Home, Mandi",
        "56B, Near Sharma's cafe, Aayush Sharma Home, Mandi",
    ]

    return (
        <div>
            {/* This is a sample data */}

            {
                locations.map(function (elem,idx) {
                    return <div key={idx} onClick={() =>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl  my-2 items-center justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }

        </div>
    )
}

export default LocationSearchPanel
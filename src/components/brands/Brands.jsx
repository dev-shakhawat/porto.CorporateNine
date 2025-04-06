import React from 'react'


// logos
import logo1 from "../../assets/logo-1.png"
import logo2 from "../../assets/logo-2.png"
import logo3 from "../../assets/logo-3.png"
import logo4 from "../../assets/logo-4.png"
import logo5 from "../../assets/logo-5.png"
import logo6 from "../../assets/logo-6.png"

const Brands = () => {

    const brandsItem = [logo1 , logo2 ,logo3 , logo4 , logo5 , logo6]
  return (
    <div className='py-25'>
        <div className="container">
            <div className="flex justify-between opacity-25 ">
                {brandsItem.map((item , index)=> <img key={index} src={item} alt={item} className='w-[170px]'    />)}
            </div>
        </div>
    </div>
  )
}

export default Brands
import React from 'react'
import { BsPatchCheck } from 'react-icons/bs'
import { FaHashtag } from 'react-icons/fa'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { TbChecklist } from 'react-icons/tb'

const TotalPurches = ({ state , clickHandler}) => {
  return (
    <div className=" flex justify-between bg-[#f0f0f0] relative p-4 mx-3 my-5 rounded-3xl font-semibold">
      <div className=" flex justify-center items-center ">
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total} $</span>
      </div>
      <div className=" flex justify-center items-center ">
      <MdProductionQuantityLimits />
        <p>Quantiy:</p>
        <span>{state.itemsCounter}</span>
      </div>
      {/* <div className=" flex ">
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div> */}
      {/* <button onClick={() => clickHandler("CHEACKOUT")}>Checkout</button> */}
    </div>
  )
}

export default TotalPurches
"use client"
import { VehicleTypesButtonProps } from '../types'
import React from 'react'

const VehicleTypesButton = ({title,containerStyles,textStyles,btnType,imgSrc,handleClick}:VehicleTypesButtonProps) => {
  return (
    <button
    className={`flex cursor-pointer flex-col items-center justify-center py-4 capitalize ${containerStyles}`}
    onClick={handleClick}
    >
      <div className="">
        <img src={imgSrc} alt={title} width="53" height="24" />
      </div>
      <div className={`${textStyles}`}>{title}</div>
      
      
    </button>
  )
}

export default VehicleTypesButton

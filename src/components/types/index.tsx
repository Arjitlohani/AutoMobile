import { MouseEventHandler } from "react";

export interface VehicleTypesButtonProps{
    title :string;
    imgSrc:string;
    containerStyles?:string;  
    textStyles?:string;
    btnType?:"button" | "submit";
    handleClick ?:MouseEventHandler<HTMLButtonElement>
}
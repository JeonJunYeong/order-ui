import {OrderInfoInterface} from "@/components/layout/modal/AddOrderModal";
import React from "react";

export default function AddTwoWayOrderModal(props:{open:boolean,handleClose:()=>void}){
    const { open,handleClose } = props;

    const handleSave = (params:OrderInfoInterface) => {
        handleClose();
    }

    return (
        <></>
    )
}

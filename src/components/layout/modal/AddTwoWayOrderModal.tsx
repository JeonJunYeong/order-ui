import BtOrderForm from "@/components/ui/form/BtOrderForm";
import APIBuilder from "@/lib/utils/API/APIBuilder";
import {OrderInfoInterface} from "@/components/layout/modal/AddOrderModal";
import React from "react";

export default function AddTwoWayOrderModal(props:{open:boolean,handleClose:()=>void}){
    const { open,handleClose } = props;

    const handleSave = (params:OrderInfoInterface) => {
        // APIBuilder.post("/order/bt/save",params).params({}).build().call()
        handleClose();
    }

    return (
        <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={open}
            onClose={handleClose}
        >
            {/*<BtOrderForm handleClose={handleClose} handleSave={handleSave}/>*/}
            <Box >
                <TextField
                    fullWidth
                    label="Name"
                    id="name"
                    defaultValue={name}
                    placeholder="Enter Name"
                    margin="normal"
                    variant="standard"
                    // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    //     setName(event.target.value);
                    // }}
                />
            </Box>
        </Modal>
    )
}

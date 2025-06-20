'use client'

import React from "react";
import {Fab, Paper} from "@mui/material";
import BtOrderList from "@/app/(route)/order/btOrder/BtOrderList";
import AddIcon from '@mui/icons-material/Add';
import AddOrderModal from "@/components/layout/modal/AddOrderModal";

export default function BtOrder() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Paper sx={{  width: '100%', }}>
            <BtOrderList/>
            <Fab sx={{m:2}} color="primary" aria-label="add"
                onClick={handleOpen}
            >
                <AddIcon />
            </Fab>
            <AddOrderModal open={open} handleClose={handleClose}/>
        </Paper>

    )

}

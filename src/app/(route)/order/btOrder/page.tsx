"use client";

import React from "react";
import { Box, Button, Fab, Paper } from "@mui/material";
import BtOrderList from "@/app/(route)/order/btOrder/BtOrderList";
import AddIcon from "@mui/icons-material/Add";
import AddOrderModal from "@/components/layout/modal/AddOrderModal";

export default function BtOrder() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ margin: 2 }}>
        <Button variant="outlined" onClick={handleOpen}>
          신규 주문
        </Button>
        <BtOrderList />
      </Box>
      <AddOrderModal open={open} handleClose={handleClose} />
    </Paper>
  );
}

"use client";

import React from "react";
import { Box, Button, Paper } from "@mui/material";
import MasterTableLayout from "@/components/layout/tableLayout/MasterTableLayout";
import DetailTableLayout from "@/components/layout/tableLayout/DetailTableLayout";
import AddExchangeModal from "@/components/layout/modal/AddExchangeModal";
import AddOrderModal from "@/components/layout/modal/AddOrderModal";

export default function InternationalStocks() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Paper sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            flex: 1,
            height: "100%",
            overflow: "hidden",
            margin: 2,
          }}
        >
            <Button variant="outlined" onClick={handleOpen}>
                Add
            </Button>
          <MasterTableLayout />
        </Box>
        <Box sx={{ flex: 2, height: "100%", overflow: "hidden", margin: 2 }}>
          <DetailTableLayout />
        </Box>
      </Box>
        {/*<AddExchangeModal open={open} handleClose={handleClose}/>*/}
        <AddExchangeModal open={open} handleClose={handleClose} />
    </Paper>
  );
}

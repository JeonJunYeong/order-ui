"use client";

import React from "react";
import { Box, Button, Paper } from "@mui/material";
import MasterTableLayout from "@/components/layout/tableLayout/MasterTableLayout";
import DetailTableLayout from "@/components/layout/tableLayout/DetailTableLayout";

export default function InternationalStocks() {
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
          <Button>Add</Button>
          <MasterTableLayout />
        </Box>
        <Box sx={{ flex: 2, height: "100%", overflow: "hidden", margin: 2 }}>
          <DetailTableLayout />
        </Box>
      </Box>
    </Paper>
  );
}

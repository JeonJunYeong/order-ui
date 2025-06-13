import React from "react";
import {Box} from "@mui/material";
import DynamicTab from "@/components/ui/tab/DynamicTab";


export default function OrderTab() {

  const list =[{label:"1"}]

  return (
    <Box>
      <DynamicTab list={list} />
    </Box>
  );
}
"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DynamicTab from "@/components/ui/tab/DynamicTab";
import { twoWayOrderAPi } from "@/api/users/routes";
import { AxiosResponse } from "axios";

const { getUserTwoWayOrderRList } = twoWayOrderAPi;

export default function OrderTab() {
  return (
    <Box sx={{ width: "100%" }}>
      <DynamicTab />
    </Box>
  );
}

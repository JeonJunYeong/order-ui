import React from "react";
import { Paper, Container } from "@mui/material";
import OrderTab from "@/app/(route)/order/twoWayOrder/OrderTab";
export default function TwoWayOrderPage() {
  return (
    <Paper sx={{ width: "100%", height: "100%" }}>
      <Container>
        <OrderTab />
      </Container>
    </Paper>
  );
}

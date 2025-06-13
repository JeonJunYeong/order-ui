import React from "react";
import { Paper,Container} from "@mui/material";
import OrderTab from "@/app/(route)/order/twoWayOrder/OrderTab";
export default function TwoWayOrderPage() {
  return (
      <Paper>
          <Container >
              <OrderTab/>
          </Container>
      </Paper>
  );
}
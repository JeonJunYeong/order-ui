import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import APIBuilder from "@/lib/utils/API/APIBuilder";
import { Box, Button } from "@mui/material";
import { twoWayOrderAPi } from "@/api/users/routes";
import clsx from "clsx";

interface BtOrderInterface {
  id: string;
  name: string;
  side: string;
  price: number;
  count: number;
  status: string;
  minPrice: number;
  maxPrice: number;
}

export default function BtOrderList() {
  const [list, setList] = React.useState<BtOrderInterface[]>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const result = await APIBuilder.get("/order/bt/get/list")
      .params({})
      .build()
      .call();

    setList(result.data as BtOrderInterface[]);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Symbol Name", width: 130 },
    {
      field: "side",
      headerName: "Side",
      width: 130,
      cellClassName: (params: GridCellParams<any, string>) => {
        if (params.value == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.value === "sell",
          positive: params.value === "buy",
        });
      },
    },
    { field: "price", headerName: "Price", width: 130, type: "number" },
    { field: "count", headerName: "Count", width: 130, type: "number" },
    { field: "status", headerName: "status", width: 130 },
    {
      field: "pnl",
      headerName: "pnl",
      width: 130,
      cellClassName: (params: GridCellParams<any, number>) => {
        if (params.value == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.value < 0,
          positive: params.value > 0,
        });
      },
    },
    {
      field: "order",
      headerName: "Order",
      width: 120,
      renderCell: (e) => (
        <div>
          <Button
            onClick={() => {
              closeOrder(e);
            }}
          >
            정리
          </Button>
        </div>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 20 };

  const closeOrder = (e) => {
    const { userId, name, side, count, id } = e.row;
    twoWayOrderAPi.closeOrder(id, userId, name, side, count);
    getList();
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 1,
        borderColor: "#000",
        "& .super-app.negative": {
          // backgroundColor: 'rgba(157, 255, 118, 0.49)',
          color: "#d47483",
          fontWeight: "600",
        },
        "& .super-app.positive": {
          // backgroundColor: '#d47483',
          color: "rgba(157, 255, 118, 0.49)",
          fontWeight: "600",
        },
      }}
    >
      <DataGrid
        rows={list}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Box>
  );
}

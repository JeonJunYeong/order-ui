import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [];
const paginationModel = { page: 0, pageSize: 20 };

export default function DetailTableLayout(props:{columns:GridColDef[],data:object[]}) {
    const {columns,data} = props;
  return (
    <Box>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}

        sx={{ border: 0 }}
      />
    </Box>
  );
}

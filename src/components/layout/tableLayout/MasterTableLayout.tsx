import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [];
const paginationModel = { page: 0, pageSize: 20 };

export default function MasterTableLayout() {
  return (
    <Box>
      <DataGrid
        rows={[]}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Box>
  );
}

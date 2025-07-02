import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [];
const paginationModel = { page: 0, pageSize: 20 };

export default function MasterTableLayout(props:{columns:GridColDef[],data:object[],handleRowClick}) {
    const {columns,data,handleRowClick} = props;

  return (
    <Box>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        // pageSizeOptions={[5, 10]}
        onRowClick={handleRowClick}
        sx={{ border: 0 }}
      />
    </Box>
  );
}

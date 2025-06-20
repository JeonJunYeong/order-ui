"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { twoWayOrderAPi } from "@/api/users/routes";
import clsx from "clsx";

const {
  getTwoWayOrderNameList,
  getTwoWaySymbolInfo,
  closeSingleOrder,
  getUserTwoWayOrderRList,
  openOrder,
  reverseOpenOrderApi,
} = twoWayOrderAPi;

interface DynamicTabProps {
  list: Array<{ label: string; id: string }>;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "userName", headerName: "UserName", width: 130 },
  {
    field: "side",
    headerName: "Side",
    width: 70,
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
  { field: "count", headerName: "Count", width: 70, type: "number" },
  { field: "price", headerName: "Price", width: 130, type: "number" },
  {
    field: "pnl",
    headerName: "PNL",
    width: 130,
    type: "number",
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
    width: 350,
    renderCell: (e) => (
      <div>
        <Button
          onClick={() => {
            saveTwoWayOrder(e);
          }}
        >
          주문
        </Button>
        <Button
          onClick={() => {
            reverseOpenOrder(e);
          }}
        >
          역계정주문
        </Button>
        <Button
          onClick={() => {
            singleCloseOrder(e);
          }}
        >
          부분정리
        </Button>
        <Button
          onClick={() => {
            closePosition(e);
          }}
        >
          주문정리
        </Button>
      </div>
    ),
  },
];
const paginationModel = { page: 0, pageSize: 20 };
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function singleCloseOrder(e) {
  const { id, userId, name, side, count } = e.row;
  closeSingleOrder(id, userId, name, side, 0);
}

function closePosition(e) {
  const { id, userId, name, side, count } = e.row;
  closeSingleOrder(id, userId, name, side, count);
}

function saveTwoWayOrder(e) {
  const { id, userId, name, side } = e.row;

  openOrder(id, userId, name, side);
}

function reverseOpenOrder(e) {
  const { id, userId, name, side, groupId } = e.row;
  reverseOpenOrderApi(id, userId, groupId, name, side);
}

export default function DynamicTab() {
  const [value, setValue] = useState(0);
  const [tabList, setTabList] = useState([]);
  const [map, setMap] = useState([]);

  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    setTabFunc();
  }, []);

  useEffect(() => {
    // console.log('list',tabList)
  }, [tabList]);

  useEffect(() => {
    setTabPanel(value);
  }, [value]);

  const setTabFunc = async () => {
    const result = await getUserTwoWayOrderRList();

    setTabList(
      result.data.map((item) => ({ label: item.groupName, id: item.groupId })),
    );
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const setTabPanel = async (value: number) => {
    const id = tabList[value]
      ? tabList[value].id
      : "8d5f0500-819a-4fab-a83d-5074bf972c00";
    const result = await getTwoWayOrderNameList(id);

    setMap(
      result.data.map((item) => {
        return { symbolName: item.name, id: item.groupId };
      }),
    );
  };

  const symbolClick = async (id: string, name: string) => {
    const result = await getTwoWaySymbolInfo(id, name);
    setOrderList(result.data);
  };
  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Box sx={{ margin: 2 }}>
          <Button variant="outlined">신규 주문</Button>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabList.map((e, index) => {
            return <Tab key={index} label={e.label} {...a11yProps(index)} />;
          })}
        </Tabs>
      </Box>
      {tabList.map((e, index) => {
        return (
          <CustomTabPanel value={value} index={index} key={index}>
            <Box
              sx={{
                width: "100%",
                height: 500,
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
              {}
              {
                <Stack spacing={2} direction="row">
                  {map.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        variant="outlined"
                        onClick={() => {
                          symbolClick(item.id, item.symbolName);
                        }}
                      >
                        {item.symbolName}
                      </Button>
                    );
                  })}
                </Stack>
              }
              <DataGrid
                rows={orderList}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0, margin: 1 }}
              />
            </Box>
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}

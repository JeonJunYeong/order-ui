"use client";

import React, {useEffect, useState} from "react";
import MasterTableLayout from "@/components/layout/tableLayout/MasterTableLayout";
import DetailTableLayout from "@/components/layout/tableLayout/DetailTableLayout";
import AddExchangeModal from "@/components/layout/modal/AddExchangeModal";
import {Box, Button, Paper, TextField} from "@mui/material";
import {GridCellParams, GridColDef} from "@mui/x-data-grid";
import {exchangeOrderApi} from "@/api/exchange/routes";
import clsx from "clsx";

const {getMasterData,getDetailData} = exchangeOrderApi;

const masterColumns: GridColDef[] =[
    { field: "id", headerName: "ID", width: 200 },
    { field: "exchange", headerName: "Name", width: 160 },
]


const detailColumns: GridColDef[] =[
    { field: "id", headerName: "ID", width: 200 },
    { field: "count", headerName: "Count", width: 160 },
    { field: "price", headerName: "Price", width: 160 },
    {
        field: "pnl",
        headerName: "Pnl", width: 160 ,
        cellClassName: (params: GridCellParams<any, number>) => {
            if (params.value == null) {
                return "";
            }

            return clsx("super-app", {
                negative: params.value < 0,
                positive: params.value > 0,
            });
        },},
]

export default function Exchange(){
    const [open, setOpen] = useState(false);
    const [nowPrice, setNowPrice] = useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [masterData,setMasterData] = useState([]);
    const [detailData,setDetailData] = useState([]);

    useEffect(()=>{
        callMasterDataApi()
    },[])


    const callMasterDataApi = async () => {
        const result = await getMasterData();
        setMasterData(result.data);
    }

    const rowClickEvent = async (e) => {
        const result = await getDetailData(e.row.exchange);

        const map = result.data.map(item=>{
            const pnl = (nowPrice - item.price) * item.count

            return {
                id:item.orderId,
                count:item.count,
                price:item.price,
                pnl:pnl
            }
        })

        setDetailData(map);
    }

    return (
        <Paper sx={{ width: "100%", height: "100%" }}>
            <Box sx={{display:"box"}}>
               <Box sx={{display:"inline"}}>
                   <Button
                       sx={{margin:3 }}
                       variant="outlined"
                       onClick={handleOpen}>
                       Add
                   </Button>
               </Box>
                <TextField
                    label="Price"
                    id="standard-size-normal"
                    margin="normal"
                    defaultValue={nowPrice.toString()}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNowPrice(parseFloat(event.target.value));
                    }}
                />
            </Box>
            <Box sx={{ display: "flex", width: "100%" }}>

                <Box
                    sx={{
                        flex: 1,
                        height: "100px",
                        // overflow: "hidden",
                        margin: 2,

                    }}
                >
                    <MasterTableLayout columns={masterColumns} data={masterData} handleRowClick={rowClickEvent}/>
                </Box>
                <Box sx={{ flex: 2, height: "100%", overflow: "hidden", margin: 2,
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
                    },}}>
                    <DetailTableLayout columns={detailColumns} data={detailData}/>
                </Box>
            </Box>
            {/*<AddExchangeModal open={open} handleClose={handleClose}/>*/}
            <AddExchangeModal open={open} handleClose={handleClose} />
        </Paper>
    );
}

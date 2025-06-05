import {DataGrid, GridColDef} from "@mui/x-data-grid";
import React, {useEffect} from "react";
import APIBuilder from "@/lib/utils/API/APIBuilder";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Symbol Name', width: 130 },
    { field: 'side', headerName: 'Side', width: 130 },
    { field: 'price', headerName: 'Price', width: 130,type:"number" },
    { field: 'count', headerName: 'Count', width: 130,type:"number" },
    { field: 'status', headerName: 'status', width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

// [
//     {
//         "id": "fe5164c2-91f7-4487-81bb-e2283ad55590",
//         "name": "TEST",
//         "side": "buy",
//         "price": 1.5,
//         "count": "100",
//         "status": "OPEN",
//         "minPrice": 0.9,
//         "maxPrice": 1.5
//     }
// ]

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
    },[])

    const getList = async () => {
       const result =  await APIBuilder.get("/order/bt/get/list").params({}).build().call()
        setList(result.data as BtOrderInterface[])
    }

    return (
        <DataGrid
            rows={list}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
        />
    )
}
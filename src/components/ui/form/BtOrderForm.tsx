import {Box, Button, ButtonGroup, Divider, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {OrderInfoInterface} from "@/components/layout/modal/AddOrderModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


interface BtOrderFormInterface {
    handleClose: () => void;
    handleSave: (p:OrderInfoInterface) => void;
}

export default function BtOrderForm(props: BtOrderFormInterface) {

    const { handleClose,handleSave } = props;

    const [name,setName] = useState<string>("")
    const [minPrice,setMinPrice] = useState<number>(0)
    const [maxPrice,setMaxPrice] = useState<number>(0)
    const [count,setCount] = useState<number>(0)

    useEffect(() => {
        console.log(minPrice)
    }, [minPrice]);

    return (
        <>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Title
                </Typography>
                <Divider  />
                <TextField
                    fullWidth
                    label="Name"
                    id="name"
                    defaultValue={name}
                    placeholder="Enter Name"
                    margin="normal"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    label="Max"
                    sx={{width:"48%", mr:1.5}}
                    id="standard-size-normal"
                    margin="normal"
                    defaultValue={maxPrice.toString()}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setMaxPrice(parseFloat(event.target.value));
                    }}
                />
                <TextField
                    label="Min"
                    sx={{width:"48%"}}
                    id="standard-size-normal"
                    margin="normal"
                    defaultValue={minPrice.toString()}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setMinPrice(parseFloat(event.target.value));
                    }}
                />
                <TextField
                    fullWidth
                    label="Count"
                    id="standard-size-normal"
                    margin="normal"
                    defaultValue={count.toString()}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setCount(parseInt(event.target.value));
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        '& > *': {
                            m: 1,
                        },
                        justifyContent:"center"
                    }}
                >
                    <ButtonGroup
                        sx={{textAlign:"center"}}
                        variant="contained"
                        aria-label="Basic button group"

                    >
                        <Button onClick={()=>{
                            handleSave({name,maxPrice,minPrice,count})
                        }}>저장</Button>
                        <Button
                            onClick={handleClose}
                        >취소</Button>
                    </ButtonGroup>

                </Box>

            </Box>

        </>
    );
}
import {OrderInfoInterface} from "@/components/layout/modal/AddOrderModal";
import React, {useState} from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";

interface ExchangeOrderFormProps {
    handleClose: () => void;
    handleSave: (p:{exchange:string,price:number,count:number}) => void;
}
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

export default function ExchangeOrderForm(props:ExchangeOrderFormProps){
    const { handleClose,handleSave } = props;
    const [value,setValue]= useState<string>("");
    const [price,setPrice] = useState<number>(0);
    const [count,setCount] = useState<number>(0);

    const exchangeHandleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Title
            </Typography>
            <Divider  />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Exchange</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Exchange"
                    onChange={exchangeHandleChange}
                >
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'JPY'}>JPY</MenuItem>
                </Select>
                <TextField
                    label="Price"
                    id="standard-size-normal"
                    margin="normal"
                    defaultValue={price.toString()}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPrice(parseFloat(event.target.value));
                    }}
                />
                <TextField
                    label="Count"
                    id="standard-size-normal"
                    margin="normal"
                    defaultValue={count.toString()}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setCount(parseFloat(event.target.value));
                    }}
                />
            </FormControl>
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
                        handleSave({exchange:value,price,count})
                    }}>저장</Button>
                    <Button
                        onClick={handleClose}
                    >취소</Button>
                </ButtonGroup>

            </Box>
        </Box>
    )
}


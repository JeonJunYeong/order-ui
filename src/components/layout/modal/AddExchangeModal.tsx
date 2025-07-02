import APIBuilder from "@/lib/utils/API/APIBuilder";
import {Modal} from "@mui/material";
import ExchangeOrderForm from "@/components/ui/form/ExchangeOrderForm";
import {exchangeOrderApi} from "@/api/exchange/routes";

const {exchangeSaveOrder} = exchangeOrderApi

export default function AddExchangeModal(props:{open:boolean,handleClose:()=>void}){
    const { open,handleClose } = props;

    const handleSave = (params:{exchange:string,price:number,count:number}) => {
        exchangeSaveOrder(params);
        handleClose();
    }

    return (
         <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
             open={ open }
             onClose={handleClose}>
            <ExchangeOrderForm handleClose={handleClose} handleSave={handleSave}/>
         </Modal>
    )
}

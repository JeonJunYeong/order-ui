import { Modal } from "@mui/material";
import BtOrderForm from "@/components/ui/form/BtOrderForm";
import APIBuilder from "@/lib/utils/API/APIBuilder";


export interface OrderInfoInterface {
    name: string;
    minPrice: number;
    maxPrice: number;
    count: number;
}

export default function AddOrderModal(props:{open:boolean,handleClose:()=>void}) {
    const { open,handleClose } = props;

    const handleSave = (params:OrderInfoInterface) => {
        APIBuilder.post("/order/bt/save",params).params({}).build().call()
        handleClose();
    }

    return (
      <Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          open={open}
          onClose={handleClose}
      >
         <BtOrderForm handleClose={handleClose} handleSave={handleSave}/>
      </Modal>
  );
}
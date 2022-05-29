import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent'


const Modal = ({handleClose, open}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                LUlita
            </DialogContent>
        </Dialog>
    )
}

export default Modal
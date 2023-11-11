import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlide({ open, dataInfo, handleDialogClose}: { open: boolean; dataInfo: any; handleDialogClose: (isOpen:boolean) => void;}) {


    const handleClose = () => {
        handleDialogClose(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{zIndex: 999999999, backdropFilter: 'blur(10px)'}}   
            >
                <DialogTitle sx={{fontSize:"25px", fontWeight:400}}>{dataInfo.title}</DialogTitle>
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" sx={{textAlign: 'justify'}}>
                        {dataInfo.desc}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} sx={{color: '#cd8903', fontWeight: 600, letterSpacing: '2px'}}>Close</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}
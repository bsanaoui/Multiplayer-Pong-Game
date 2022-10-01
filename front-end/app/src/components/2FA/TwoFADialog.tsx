import { Box, Dialog, DialogContent, DialogTitle, IconButton, styled, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { HandleCloseDialog, HandleOpeneDialog } from '../../store/gameReducer';
import { useDispatch } from 'react-redux';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

type Props = {
    children: JSX.Element,
};

const TwoFADialog = ({ children }: Props) => {
    const isOpen = useSelector((state: RootState) => state.game).dialogIsOpen;
    const dispatch = useDispatch();
    // useEffect(() => {
    // }, [modeGame])

    return (
        <div>
            <BootstrapDialog
                onClose={() => {dispatch(HandleCloseDialog())}}
                aria-labelledby="customized-dialog-title"
                open={isOpen}>
                <Box sx={{ backgroundColor: "#36393F"}}>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={() => {dispatch(HandleCloseDialog())}} >
                       ENABLE TWO-FACTOR AUTH
                       <Typography fontSize="0.8rem">Make your account safer in 3 easy steps:</Typography>
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        {children}
                    </DialogContent>
                </Box>
            </BootstrapDialog>
        </div>
    )
}

export default TwoFADialog
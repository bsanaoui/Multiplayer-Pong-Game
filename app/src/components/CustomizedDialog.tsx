import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, styled, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import React, { Children } from 'react';

interface MyFormValues {
	roomName: string;
	roomKind: string;
	password: string;
}

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

const CustomizedDialog = ({children}:Props) => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Create New Room
			</Button>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
					Room Infos
				</BootstrapDialogTitle>
				<DialogContent dividers>
					{children}
				</DialogContent>
			</BootstrapDialog>
		</div>
	)
}

export default CustomizedDialog
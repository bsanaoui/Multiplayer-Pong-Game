import { Box, Dialog, DialogContent, DialogTitle, IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';


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

const CustomizedDialog = ({ children }: Props) => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<div className='button-custom center-text center-button' style={{ width: '280px' }}
				onClick={handleClickOpen}>
				Start a new room
			</div>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}>
				<Box sx={{ backgroundColor: "#130742" }}> {/** Color in 2 */}

					<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
						Room Infos
					</BootstrapDialogTitle>
					<DialogContent dividers>
						{children}
					</DialogContent>
				</Box>
			</BootstrapDialog>
		</div>
	)
}

export default CustomizedDialog
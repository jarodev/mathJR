import * as React from 'react';
import {
	AppBar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Menu,
	MenuItem,
	Slide,
	Toolbar,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { UserContext } from './context/UserContext';
import { AccountCircle } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { supabase } from '../utils/supabaseClient';
import { supabaseAdminClient } from '../utils/supabaseAdminClient';

export default function MainAppBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);

	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = async () => {
		try {
			let { error } = await supabase.auth.signOut();

			if (error) {
				throw error;
			}
		} catch (e) {
			alert(e.message);
		}
	};

	const handleProfile = async () => {
		const user = await supabase.auth.user();

		if (user) {
			try {
				let { data, error } = await supabase
					.from('Users')
					.select('*')
					.eq('refUser', user.id);

				if (data && data.length > 0) {
					let { data, error1 } = await supabaseAdminClient
						.from('Users')
						.delete()
						.eq('refUser', user.id);
					if (error1) throw error;
				}
				if (error) throw error;

				await supabase.auth.signOut();

				const { error2 } = await supabaseAdminClient.auth.api
					.deleteUser(user.id)
					.then(() => alert('Profil wurde gelöscht'));
				if (error || error2) {
					throw error;
				}
			} catch (e) {
				alert(e.message);
			}
		}
	};

	const openDialog = () => {
		setAnchorEl(false);
		setOpen(true);
	};

	return <>
        <UserContext.Consumer>
            {(currentUser) => (
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="medium"
                                edge="start"
                                aria-label="Home"
                                sx={{ mr: 2 }}
                            >
                                <Link href="/mainpage" legacyBehavior>
                                    <HomeIcon />
                                </Link>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                MathJR
                            </Typography>

                            <IconButton
                                size="large"
                                area-label="account of the current user"
                                area-controls="menu-appbar"
                                area-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                edge="end"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepmounted="true"
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={openDialog}>Profil löschen</MenuItem>
                                <MenuItem onClick={handleLogout}>Log-out</MenuItem>
                            </Menu>
                        </Toolbar>
                        <Dialog
                            open={open}
                            keepMounted
                            onClose={() => setOpen(false)}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>Profil löschen?</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Soll das aktuelle Profil komplett gelöscht werden? Der
                                    Vorgang kann nicht wieder rückgängig gemacht werden.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setOpen(false)}>NEIN</Button>
                                <Button onClick={handleProfile}>JA, Profil löschen</Button>
                            </DialogActions>
                        </Dialog>
                    </AppBar>
                </Box>
            )}
        </UserContext.Consumer>
    </>;
}

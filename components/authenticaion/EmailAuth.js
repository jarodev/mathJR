import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
	Alert,
	AlertTitle,
	Button,
	CircularProgress,
	TextField,
} from '@mui/material';
import * as React from 'react';
import { supabase } from '../../utils/supabaseClient';
import Container from '@mui/material/Container';
import { Copyright } from '../footer';

export default function EmailAuth(props) {
	const [email, setEmail] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const [error, setError] = React.useState();

	const sendButton = async () => {
		setLoading(true);
		try {
			const { error } = await supabase.auth.signIn({
				email: email,
			});
			if (error) throw error;
			setSuccess(true);
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h4">
					Einloggen mit Magic Link
				</Typography>
			</Box>
			<Box
				sx={{
					marginTop: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: 2,
				}}
			>
				<Typography>
					Beim Einloggen mit Magic Link wird an die angegebene Email-Adresse ein
					Link geschickt, über den man sich direkt einloggen kann. Ein Passwort
					wird nicht benötigt.
				</Typography>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email-Addresse"
					name="email"
					autoComplete="email"
					autoFocus
					onChange={(e) => {
						setEmail(e.target.value);
						setError(null);
						setSuccess(false);
					}}
				/>
				<Button
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
					onClick={sendButton}
				>
					Magic Link senden
				</Button>
				{loading ? <CircularProgress style={{ alignSelf: 'center' }} /> : null}
				{success ? (
					<Alert severity={'success'}>
						<AlertTitle>Erfolgreich</AlertTitle>
						Der Magic Link wurde erfolgreich an die angegebene Email-Adresse{' '}
						<strong>{email}</strong> verschickt. Das Fenster kann geschlossen
						werden.
					</Alert>
				) : null}
				{error ? (
					<Alert severity="error">
						<AlertTitle>Fehler</AlertTitle>
						Folgender Fehler ist aufgetreten: {error}
					</Alert>
				) : null}
				<Copyright />
			</Box>
		</Container>
	);
}

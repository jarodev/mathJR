import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function EmailPasswdAuth(props) {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [user, setUser] = React.useState();

	const sendButton = async () => {
		setLoading(true);
		try {
			const { user, error } = await supabase.auth.signIn({
				email: email,
				password: password,
			});

			if (error) {
				throw error;
			}

			if (user) {
				setLoading(false);
				setUser(user);
			}
		} catch (e) {
			alert(e);
		}
	};
	/*
		const router = useRouter();
	
		useEffect(() => {
			if (!(user || loading)) {
				router.push('/');
			}
		}, [user, loading]);
	*/
	return (
		<Box sx={{ maxWidth: '60%' }}>
			<Typography variant="h2">Einloggen mit Email und Password</Typography>
			<Typography variant="body1">
				Zum Einloggen bitte Email und Passwort eintragen.
			</Typography>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<TextField
						required
						id="email"
						label="Email-Adresse"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						required
						id="password"
						label="Passwort"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button variant="contained" onClick={sendButton}>
						Einloggen
					</Button>
				</div>
			</Box>
		</Box>
	);
}

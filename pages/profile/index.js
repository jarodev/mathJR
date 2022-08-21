import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function Profile() {
	const [name, setName] = React.useState('');
	const [surname, setSurname] = React.useState('');

	const [session, setSession] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	useEffect(() => {
		session ? getCurrentUser().then(() => setLoading(false)) : null;
	}, [session]);

	async function getCurrentUser() {
		try {
			setLoading(true);
			const user = supabase.auth.user();

			let { data, error, status } = await supabase
				.from('Users')
				.select('id, refUser, roles, comment, name, surname, username, isAdmin')
				.eq('refUser', user.id)
				.single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				await setCurrentUser(data);
				setName(currentUser.name);
				setSurname(currentUser.surname);
				setLoading(false);
			}
		} catch (error) {
			alert(error.message);
		}
	}

	const handleSubmit = () => {};

	return (
		<>
			<Typography variant="h2">Profil</Typography>
			{loading ? null : (
				<>
					<TextField
						id="profileName"
						label="Vorname"
						defaultValue={currentUser.name}
						onChange={(event) => {
							setName(event.target.value);
						}}
					/>
					<TextField
						id="profileSurName"
						label="Nachname"
						defaultValue={currentUser.surname}
						onChange={(event) => {
							setSurname(event.target.value);
						}}
					/>
					<Button variant="contained" onClick={handleSubmit}>
						Speichern
					</Button>
				</>
			)}
		</>
	);
}

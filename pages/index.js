import * as React from 'react';
import { useEffect, useState } from 'react';
import {
	createTheme,
	StyledEngineProvider,
	ThemeProvider,
	useTheme,
} from '@mui/material';
import Mainpage from './mainpage';
import { supabase } from '../utils/supabaseClient';
import Account from '../components/Account';
import EmailAuth from '../components/authenticaion/EmailAuth';
import { UserContext } from '../components/context/UserContext';

const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

export default function Home() {
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
				setLoading(false);
			}
		} catch (error) {
			alert(error.message);
		}
	}

	return (
		<div className="container">
			{!session ? (
				<EmailAuth />
			) : !loading ? (
				<UserContext.Provider value={currentUser}>
					<Mainpage />
				</UserContext.Provider>
			) : (
				<></>
			)}
		</div>
	);
}

export function MathJR() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	return (
		<>
			<StyledEngineProvider injectFirst>
				<Mainpage />
				<Account key={session.user.id} session={session} />
			</StyledEngineProvider>
		</>
	);
}

export function ToggleColorMode(props) {
	const [mode, setMode] = React.useState('light');

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((preMode) => (preMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = React.useMemo(() => createTheme({ palette: mode }), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{props.app}</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

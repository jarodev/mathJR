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
import Authentication from '../components/authenticaion/Authentication';

const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

export default function Home() {
	const [session, setSession] = useState(null);

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<div className="container" style={{ padding: '50px 0 100px 0' }}>
			{!session ? (
				<Authentication />
			) : (
				<Account key={session.user.id} session={session} />
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

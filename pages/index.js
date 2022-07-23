import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import Mainpage from './mainpage';

const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

export default function MathJR() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	return (
		<>
			<Mainpage />
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

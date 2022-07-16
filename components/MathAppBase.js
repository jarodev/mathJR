import * as React from 'react';
import { MathAppsContext } from './MathAppsContextProvider';
import MainAppBar from './MainAppBar';

export function MathAppBase(props) {
	return (
		<>
			<MainAppBar />
			<MathAppsContext.Provider>
				<div style={{ paddingTop: '20px' }}>{props.app}</div>
			</MathAppsContext.Provider>
		</>
	);
}

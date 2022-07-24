import * as React from 'react';
import { MathAppsContext } from './MathAppsContextProvider';
import MainAppBar from './MainAppBar';
import { UserContext } from './context/UserContext';

export function MathAppBase(props) {
	return (
		<>
			<UserContext.Provider value="user1">
				<MainAppBar />
				<MathAppsContext.Provider>
					<div style={{ paddingTop: '20px' }}>{props.app}</div>
				</MathAppsContext.Provider>
			</UserContext.Provider>
		</>
	);
}

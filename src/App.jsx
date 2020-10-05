import React, { useReducer } from 'react';
import { Route } from 'react-router-dom';
import { MainPage, CartPage } from './pages';
import { AppHeader } from './components';
import { reducer, initialState } from './redux/reducers/index';

import Background from './assets/food-bg.jpg';

export const ContextApp = React.createContext();

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ContextApp.Provider value={{ state, dispatch }}>
			<div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
				<AppHeader total={state.totalPrice} />
				<Route path="/" component={MainPage} exact />
				<Route path="/cart" component={CartPage} exact />
			</div>
		</ContextApp.Provider>
	);
};

export default App;

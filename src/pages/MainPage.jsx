import React, { useContext, useEffect } from 'react';
import { ContextApp } from '../App';
import { menuLoaded, menuRequsted, menuError, addToCart } from '../redux/actions';
import getResource from '../service/utils';
import { MenuItem, Spinner, Error } from '../components';

/* eslint-disable react/jsx-props-no-spreading */

const MainPage = () => {
	const { state, dispatch } = useContext(ContextApp);

	useEffect(() => {
		dispatch(menuRequsted());

		getResource('/menu')
			.then((data) => dispatch(menuLoaded(data)))
			.catch(() => dispatch(menuError()));
	}, [dispatch]);

	return (
		<div className="container">
			<ul className="menu__list">
				{
					state.error
						? <Error />
						: <></>
				}
				{
					state.loading
						? <Spinner />
						: state.menu.map((obj) => <MenuItem key={obj.id} onAddToCart={() => dispatch(addToCart(obj.id))} {...obj} />)
				}
			</ul>
		</div>
	);
};

export default MainPage;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApp } from '../App';
import cartIcon from '../assets/shopping-cart-solid.svg';

const AppHeader = () => {
	const { state } = useContext(ContextApp);

	return (
		<header className="header">
			<Link to="/" className="header__link">
				Menu
			</Link>
			<Link to="/cart" className="header__link">
				<img className="header__cart" src={cartIcon} alt="cart" />
				:&nbsp;
				<span className="header__cart_length">{state.cartLength}</span>
				Total:&nbsp;
				{state.totalPrice}
				$
			</Link>
		</header>
	);
};

export default AppHeader;

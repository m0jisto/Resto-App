import React, { useContext } from 'react';
import { ContextApp } from '../App';
import { removeToCart } from '../redux/actions';
import { CartItem } from '../components';

/* eslint-disable react/jsx-props-no-spreading */

const CartPage = () => {
	const { state, dispatch } = useContext(ContextApp);

	return (
		<div className="cart">
			<div className="cart__title">Ваш заказ:</div>
			<div className="cart__list">
				{
					state.cart.map((obj) => <CartItem key={obj.id} removeToCart={() => dispatch(removeToCart(obj.id))} {...obj} />)
				}
			</div>
		</div>
	);
};

export default CartPage;

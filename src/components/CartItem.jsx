import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ title, url, lehgth, price, removeToCart }) => (
	<>
		<div className="cart__item">
			<img className="cart__item-img" src={url} alt={title} />
			<div className="cart__item-title">{title}</div>
			<div className="cart__item-price">
				x
				{lehgth}
				&#8195;
				&#8195;
				{price}
				$
			</div>
			<button onClick={() => removeToCart()} className="cart__close" type="button">&times;</button>
		</div>
	</>
);

CartItem.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number,
	url: PropTypes.string,
	lehgth: PropTypes.number,
	removeToCart: PropTypes.func,
};

CartItem.defaultProps = {
	title: '',
	price: 0,
	url: 'https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg',
	lehgth: 0,
	removeToCart: () => {},
};

export default CartItem;

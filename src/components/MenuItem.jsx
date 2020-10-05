import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ title, price, url, category, onAddToCart }) => (
	<li className="menu__item">
		<div className="menu__title">{title}</div>
		<img className="menu__img" src={url} alt={title} />
		<div className="menu__category">
			Category:&nbsp;
			<span>{category}</span>
		</div>
		<div className="menu__price">
			Price:&nbsp;
			<span>
				{price}
				$
			</span>
		</div>
		<button onClick={() => onAddToCart()} className="menu__btn" type="button">Add to cart</button>
	</li>
);

MenuItem.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number,
	url: PropTypes.string,
	category: PropTypes.string,
	onAddToCart: PropTypes.func,
};

MenuItem.defaultProps = {
	title: '',
	price: 0,
	url: 'https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg',
	category: '',
	onAddToCart: () => {},
};

export default MenuItem;

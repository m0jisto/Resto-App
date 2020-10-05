export const initialState = {
	loading: true,
	error: false,
	menu: [],
	cart: [],
	totalPrice: 0,
	cartLength: 0,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'MENU_LOADED':
			return {
				...state,
				loading: false,
				error: false,
				menu: action.payload,
			};
		case 'MENU_REQUSTED':
			return {
				...state,
				loading: true,
				error: false,
			};
		case 'MENU_ERROR':
			return {
				...state,
				loading: false,
				error: true,
			};
		case 'ITEM_ADD_TO_CART': {
			const id = action.payload;
			const itemIndex = state.cart.findIndex((item) => item.id === id);

			if (itemIndex >= 0) {
				const itemInState = state.cart.find((item) => item.id === id);

				itemInState.lehgth += 1;

				return {
					...state,
					totalPrice: state.totalPrice + itemInState.price,
					cartLength: state.cartLength + 1,
					cart: [
						...state.cart.slice(0, itemIndex),
						itemInState,
						...state.cart.slice(itemIndex + 1),
					],
				};
			}

			const item = state.menu.find((elem) => elem.id === id);

			const newItem = {
				id: item.id,
				title: item.title,
				lehgth: 1,
				price: item.price,
				url: item.url,
			};

			return {
				...state,
				totalPrice: state.totalPrice + newItem.price,
				cartLength: state.cartLength + 1,
				cart: [
					...state.cart,
					newItem,
				],
			};
		}
		case 'ITEM_REMOVE_TO_CART': {
			const id = action.payload;
			const itemIndex = state.cart.findIndex((item) => item.id === id);

			const { lehgth } = state.cart[itemIndex];
			const price = state.cart[itemIndex].price * lehgth;

			return {
				...state,
				totalPrice: state.totalPrice - price,
				cartLength: state.cartLength - lehgth,
				cart: [
					...state.cart.slice(0, itemIndex),
					...state.cart.slice(itemIndex + 1),
				],
			};
		}
		default:
			return state;
	}
};

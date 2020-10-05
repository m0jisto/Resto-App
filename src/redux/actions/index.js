export const menuLoaded = (newMenu) => ({
	type: 'MENU_LOADED',
	payload: newMenu,
});

export const menuRequsted = () => ({ type: 'MENU_REQUSTED' });

export const menuError = () => ({ type: 'MENU_ERROR' });

export const addToCart = (id) => ({
	type: 'ITEM_ADD_TO_CART',
	payload: id,
});

export const removeToCart = (id) => ({
	type: 'ITEM_REMOVE_TO_CART',
	payload: id,
});

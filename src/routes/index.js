import Header from '../templates/Header';
import home from '../pages/home';
import character from '../pages/character';
import error404 from '../pages/error404';

// ROUTES TO BE RENDER
const routes = {
	'/': home,
	'/:id': character,
	'/contact': 'Contact',
};

//ROUTER
const router = async () => {
	// stablishing templates to dom
	const header = null || document.getElementById('header');
	const content = null || document.getElementById('content');

	header.innerHTML = await Header();
};

export default router;

import { plugin } from '../../plugin.js';
import index from './index.js';

export default {
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				...index
			});
		})
	],
};

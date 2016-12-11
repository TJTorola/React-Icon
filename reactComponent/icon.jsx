import React from 'react';

import FA from './fa';

export default props => {
	const { i, ...rest } = props;

	return (
		<svg { ...rest }
			viewBox="0 0 32 32" 
			xmlns="http://www.w3.org/2000/svg">
			<path d={ FA[i] } />
		</svg>
	);
};

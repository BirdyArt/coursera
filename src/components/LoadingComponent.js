import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Loading = () => {
	return(
		<div className="col-12">
			<FontAwesomeIcon icon={['fas', 'spinner']} size="3x" pulse />
			<p>Loading . . .</p>
		</div>
	);
};
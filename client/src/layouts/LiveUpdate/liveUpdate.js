//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757

import React from 'react';
import { LiveUpdateImage } from '../../components';
import './liveUpdate.css';

const LiveUpdate = (props) => {
	return (
		<div className="live_update_images">
			<LiveUpdateImage live_update_url={props.image}></LiveUpdateImage>
		</div>
	);
};

export default LiveUpdate;

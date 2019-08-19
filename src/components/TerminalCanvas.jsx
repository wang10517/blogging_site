import React from 'react';

const TerminalCanvas = (props) => {
	var bar = classNames({
		content: true,
		container: true,
		animated: true,
		fadeInDown: true
	});
	return (
		<div id="about" className={bar}>
			{props.children}
		</div>
	);
};

export default TerminalCanvas;

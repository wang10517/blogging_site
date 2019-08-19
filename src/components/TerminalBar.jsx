import React from 'react';
import './style/'
const TerminalBar = (props) => {
	var bar = classNames({
		statusbar: true,
		container: true,
		animated: true,
		fadeInDown: true
	});
	return <div className={bar}>{props.children}</div>;
};

export default TerminalBar;

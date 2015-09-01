import React from 'react';

export default class PokeMessage extends React.Component {
	render() {
		let style = {
			borderBottomColor:this.props.message.color
		};
		return <li className="pokemessage" style={style}>
		{this.props.message.text}
		</li>
	}
}
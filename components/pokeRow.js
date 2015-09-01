import React from 'react';
import PokeAvatar from './pokeAvatar';

export default class PokeRow extends React.Component {

	onClick(ev) {
		this.props.growl.call(null, this.props.name, this.props.color);
	}

	render() {
		let style = {backgroundColor : this.props.color};
		return <li onClick={this.onClick.bind(this)}>
			<div className="poke-color" style={style}></div>
			<PokeAvatar number={this.props.number} />
			{this.props.name}
		</li>
	}
}
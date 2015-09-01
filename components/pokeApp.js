import React from 'react';
import PokeTable from './pokeTable';
import PokeChat from './pokeChat';
import PokeHeader from './pokeHeader';
import uid from 'uid';

export default class PokeApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {messages: []};
	}

	onGrowl(name, color){
		let text = `${name}, ${name}!`;
		let msg = {id: uid(), text: text, color:color};
		this.state.messages.push(msg);
		let msgs = this.state.messages;
		this.setState({messages: msgs});
	}

	render () {
		let pokemons = [
			{number: 1, name: 'Bulbasaur', color: '#F22613'},
			{number: 2, name: 'Ivysaur', color: '#663399'},
			{number: 3, name: 'Venusaur', color: '#26A65B'}
		];
		return <div className="pokeapp">
			<PokeHeader></PokeHeader>
			<PokeTable pokemons={pokemons} onGrowl={this.onGrowl.bind(this)}/>
			<PokeChat messages={this.state.messages} />
		</div>
	}
}
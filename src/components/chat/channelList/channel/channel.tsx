import React, { Component } from "react";

interface channelProps {
	id: number;
	name: string;
	participants: number;
	onClick: (id: any) => void;
}

export default class Channel extends React.Component<channelProps> {
	click = () => {
		this.props.onClick(this.props.id);
	};

	render() {
		return (
			<div className="border-b border-stone-500 dark:border-stone-200 p-3" onClick={this.click}>
				<div className="font-bold">{this.props.name}</div>
				<span className="text-xs">Users: {this.props.participants}</span>
			</div>
		);
	}
}

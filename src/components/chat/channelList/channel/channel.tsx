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
			<div className="" onClick={this.click}>
				<div className="">{this.props.name}</div>
				<span className="">Users: {this.props.participants}</span>
			</div>
		);
	}
}

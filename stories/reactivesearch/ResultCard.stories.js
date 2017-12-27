import React, { Component } from "react";
import { ReactiveBase, SingleDropdownRange, ResultCard } from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class ResultCardDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(source) {
		const result = {
			image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
			title: source.name,
			rating: source.rating,
			desc: source.brand,
			url: "#"
		};
		return result;
	}

	render() {
		return (
			<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
			>
				<div className="row reverse-labels">
					<div className="col">
						<SingleDropdownRange
							componentId="PriceSensor"
							dataField="price"
							title="SingleDropdownRange"
							data={
								[{ "start": 0, "end": 100, "label": "Cheap" },
									{ "start": 101, "end": 200, "label": "Moderate" },
									{ "start": 201, "end": 500, "label": "Pricey" },
									{ "start": 501, "end": 1000, "label": "First Date" }]
							}
						/>
					</div>
					<div className="col" style={{backgroundColor: "#fafafa"}}>
						<ResultCard
							componentId="SearchResult"
							dataField="name"
							title="Results"
							from={0}
							size={20}
							onData={this.onData}
							react={{
								and: "PriceSensor"
							}}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

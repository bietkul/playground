import React, { Component } from "react";
import { ReactiveBase, MultiDropdownList, ReactiveList } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class ReactiveListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row">
					<div className="col">
						<MultiDropdownList
							componentId="BookSensor"
							dataField="original_series.raw"
							title="MultiList"
							size={100}
						/>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.raw"
							className="result-list-container"
							from={0}
							size={5}
							onData={booksReactiveList}
							react={{
								and: ["BookSensor"]
							}}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

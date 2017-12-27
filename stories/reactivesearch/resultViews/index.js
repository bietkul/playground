import React from 'react';

export const booksList = (data) => ({
	title: <div className="book-title" dangerouslySetInnerHTML={{ __html: data.original_title }} />,
	desc: (
		<div className="flex column justify-space-between">
			<div>
				<div>by <span className="authors-list">{data.authors}</span></div>
				<div className="ratings-list flex align-center">
					<span className="stars">
					{
						Array(data.average_rating_rounded).fill('x')
							.map((item, index) => <i className="fas fa-star" key={index} />)
					}
					</span>
					<span className="avg-rating">({data.average_rating} avg)</span>
				</div>
			</div>
			<span className="pub-year">Pub {data.original_publication_year}</span>
		</div>
	),
	image: data.image
});

export const booksCard = (data) => ({
	title: <div className="book-title-card text-center" dangerouslySetInnerHTML={{ __html: data.original_title }} />,
	desc: (
		<div className="flex column justify-space-between text-center">
			<div>
				<div>by <span className="authors-list">{data.authors}</span></div>
				<div className="ratings-list flex align-center justify-center">
					<span className="stars">
					{
						Array(data.average_rating_rounded).fill('x')
							.map((item, index) => <i className="fas fa-star" key={index} />)
					}
					</span>
					<span className="avg-rating">({data.average_rating} avg)</span>
				</div>
			</div>
			<span className="pub-year">Pub {data.original_publication_year}</span>
		</div>
	),
	image: data.image
});

export const booksReactiveList = (data) => (
	<div className="flex book-content" key={data._id}>
		<img src={data.image} alt="Book Cover" className="book-image" />
		<div className="flex column justify-center" style={{ marginLeft: 20 }}>
			<div className="book-header">{data.original_title}</div>
			<div className="flex column justify-space-between">
				<div>
					<div>by <span className="authors-list">{data.authors}</span></div>
					<div className="ratings-list flex align-center">
						<span className="stars">
						{
							Array(data.average_rating_rounded).fill('x')
								.map((item, index) => <i className="fas fa-star" key={index} />)
						}
						</span>
						<span className="avg-rating">({data.average_rating} avg)</span>
					</div>
				</div>
			<span className="pub-year">Pub {data.original_publication_year}</span>
			</div>
		</div>
	</div>
);

export const meetupList = (data) => ({
	title: (
		<div className="meetup-title">
			{data.member ? data.member.member_name : ""} is going to ${data.event ? data.event.event_name : ""}
		</div>
	),
	image: data.member.photo,
	image_size: 'small',
	desc: (
		<div className="flex column">
			<div className="meetup-location">
				<span className="location"><i className="fas fa-map-marker-alt" /></span>
				{data.group ? data.group.group_city : ""}
			</div>
			<div className="flex wrap meetup-topics">
				{
					data.group.group_topics.slice(0, 4).map(tag => (
						<div className="meetup-topic" key={tag.topic_name}>{tag.topic_name}</div>
					))
				}
			</div>
		</div>
	),
	url: data.event.event_url
});

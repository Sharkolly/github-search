import React from 'react'

const Lists = ({ lists, fetchData }) => {
	
		const listItem = fetchData.map((list, index) => (
		<div className='list' key={index}>
			<li className='lists'>{list.name}</li>
			<a href={list.web_pages}>View</a>
		</div>
	));

	return (
		<div>
			<ul>
				{listItem}
			</ul>
		</div>
	)
}

export default Lists;
import React from 'react'

const Lists = ({ lists, fetchDataS }) => {
	
	const myArr = [fetchDataS];
	console.log(myArr);
		const listItem = myArr.map((user, index) => (
		<div className='list' key={index}>
				<div className="img">
					<img src={user.avatar_url} alt="" />
				</div>
				
				<div className="user">
					<div className="username">
						<p>Name:</p><h2> { user.name }</h2>
					</div>
					<div className="login">
						<p>Username:</p><h2> { user.login }</h2>
					</div>
					<div className="bio">
						<p>Bio:</p><p> { user.bio }</p>
					</div>
					
				</div>
		</div>
	));

	return (
		<div>
				{listItem}
		</div>
	)
}

export default Lists;
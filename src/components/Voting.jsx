import React from 'react'

export default React.createClass({
	getPair: function() {
		return this.props.pair || []
	},
	render: function() {
		return (
			<div className='voting'>
				{this.getPair().map(entry => 
					<button key={entry}>
						<h1>{entry}</h1>
					</button>
				)}
			</div>
		)
	}
})

// export default function Voting(props){
// 	const entries = props.pair || []
// 	return (
// 		<div className='voting'>
// 			{entries.map(entry => 
// 				<button key={entry}>
// 					<h1>{entry}</h1>
// 				</button>
// 			)}
// 		</div>
// 	)
// }
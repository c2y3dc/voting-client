import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Winner from './Winner'
import Vote from './Vote'

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div>
			{this.props.winner ? 
				<Winner ref="winner" winner={this.props.winner} /> :
				<Vote {...this.props} />}
		</div>
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
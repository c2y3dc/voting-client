import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import Winner from './Winner'
import Vote from './Vote'
import * as actionCreators from '../action_creators'

export const Voting = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div>
			{this.props.winner ? 
				<Winner ref="winner" winner={this.props.winner} /> :
				<Vote {...this.props} />}
		</div>
	}
})

function mapStateToProps(state){
	return {
		pair: state.getIn(['vote', 'pair']),
		hasVoted: state.getIn(['myVote', 'entry']),
		winner: state.get('winner')
	}
}

export const VotingContainer = connect(
	mapStateToProps,
	actionCreators
)(Voting)

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
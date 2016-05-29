import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import Winner from './Winner'
import Tally from './Tally'
import * as actionCreators from '../action_creators'

export const Results =  React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return (
			this.props.winner ?
			<Winner ref="winner" winner={this.props.winner} /> :
			<Tally ref="next" pair={this.props.pair} tally={this.props.tally} next={this.props.next}/>
		)
	}
})

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		tally: state.getIn(['vote', 'tally']),
		winner: state.get('winner')
	}
}

export const ResultsContainer = connect(
	mapStateToProps,
	actionCreators
)(Results)
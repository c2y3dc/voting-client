import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Winner from './Winner'
import Tally from './Tally'

export default React.createClass({
	mixins: [PureRenderMixin],
	getPair: function(){
		return this.props.pair || []
	},
	getVotes: function(entry){
		if(this.props.tally && this.props.tally.has(entry)){
			return this.props.tally.get(entry)
		}
		return 0
	},
	render: function() {
		return (
			this.props.winner ?
			<Winner ref="winner" winner={this.props.winner} /> :
			<Tally ref="next" pair={this.props.pair} tally={this.props.tally} next={this.props.next}/>
		)
	}
})
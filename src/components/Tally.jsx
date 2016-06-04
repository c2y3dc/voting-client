import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

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
	getNext:function(){
		if(this.props.next){
			this.props.next()
		}
	},
	render: function(){
		return (
			<div className="results">
				<div className="tally">
					{this.getPair().map(entry => 
						<div key={entry} className="entry">
							<h1>{entry}</h1>
							<div className="voteCount">
								{this.getVotes(entry)}
							</div>
						</div>
					)}
				</div>
				<div className="management">
					<button ref="next" className="next" onClick={this.getNext()}>
						Next
					</button>
				</div>
			</div>
		)
	}
})
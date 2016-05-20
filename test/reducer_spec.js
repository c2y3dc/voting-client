import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {
	it('handles SET_STATE', () => {
		const intialState = Map()
		const action = {
			type: 'SET_STATE',
			state: Map({
				vote: Map({
					pair: List.of('Trainspotting', '28 Days Later'),
					tally: Map({Trainspotting})
				})
			})
		}
		const nextState = reducer(intialState, action)

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: {Trainspotting: 1}
			}
		}))
	})

	it('handles SET_STATE with plain JS payload', () => {
		const intialState = Map()
		const action = {
			type: 'SET_STATE',
			state : {
				vote: {
					pair: ['Trainspotting', '28 Days Later'],
					tally: {Trainspotting: 1}
				}
			}
		}
		const nextState = reducer(initialState, action)

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: {Trainspotting: 1}
			}
		}))
	})

	it('handles SET_STATE without inital state', () => {
		const action = {
			type: 'SET_STATE',
			state: {
				vote: {
					pair: ['Trainspotting', '28 Days Later'],
					tally: {Trainspotting: 1}
				}
			}
		}
		const nextState = reducer(undefined, action)

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: {Trainspotting: 1}
			}
		}))
	})
})
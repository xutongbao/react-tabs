import actions from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	tabActiveIndex: 0,
	subTabActiveIndex: null
})

export default (state = defaultState, action) => {
	switch (action.type) {
    case actions.TABS_CHANGAE_STATE: {
      if (typeof action.value !== 'undefined') {
        return state.setIn(action.key, action.value);
      } else {
        return state
      }
    }		
		default:
			return state;
	}
};

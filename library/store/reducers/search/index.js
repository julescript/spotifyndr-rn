import * as actionTypes from '../../actions/search';
import { updateObject } from '../../../utils/common';;

const initialState = {
    SEARCH_RESULTS: [],
    SEARCH_QUERY: '',
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SARCH:
            return updateObject(state, {SEARCH_RESULTS: action.data})
        case actionTypes.UPDATE_QUERY:
            return updateObject(state, {SEARCH_QUERY: action.data})
        case actionTypes.SET_LOADING:
            return updateObject(state, {loading: action.value})
        case actionTypes.SET_ERROR:
            return updateObject(state, {error: action.value})
        default:
            return state;
    }
};

export default reducer;
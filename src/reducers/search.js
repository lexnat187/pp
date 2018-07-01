import {GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE} from '../actions/types'

// The search reducer.
export default function search (state = {}, action) {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return Object.assign({}, state, {
        error: '', 
        searchText: 'Please wait...', 
        searchResult: {}, 
        searchQuery: action.searchQuery,
        searchFilter: action.searchFilter
      })
    case GET_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        error: '', searchText: '', searchResult: action.searchResult
      })
    case GET_SEARCH_FAILURE:
      return Object.assign({}, state, {
        error: action.error, searchText: 'No results available at this time.', searchResult: {}
      })
    default:
      return state
  }
}

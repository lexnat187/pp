import 'whatwg-fetch'
import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE
} from './types'

import { baseAPIURL } from '../config'

function getSearchRequest (search, ingredients, page) {
  return {
    type: GET_SEARCH_REQUEST,
    searchQuery: search,
    ingredients: ingredients,
    searchResult: {},
    page: page,
    isFetching: true
  }
}

function getSearchSuccess (result) {
  return {
    type: GET_SEARCH_SUCCESS,
    isFetching: false,
    searchResult: result
  }
}

function getSearchFailure (message) {
  return {
    type: GET_SEARCH_FAILURE,
    isFetching: false,
    error: message
  }
}

export function search (search, ingredients, page)  {
  return async (dispatch, getState) => {
    dispatch(getSearchRequest(search, ingredients, page))

    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    
    try {
        // http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 
      let response = await fetch( `${baseAPIURL}?i=${ingredients}&q=${search}&p=${page}`, {
            method: 'GET',
            headers: myHeaders
      })
      let responseJson = await response.json()

      let response2 = await fetch( `${baseAPIURL}?i=${ingredients}&q=${search}&p=${page+1}`, {
            method: 'GET',
            headers: myHeaders
      })
      let response2Json = await response2.json()

      let combinedResponse = {
          ...responseJson,
          results: [...responseJson.results, ...response2Json.results]
      }

      dispatch(getSearchSuccess(combinedResponse))
    } catch (error) {
      dispatch(getSearchFailure(error))
    }
  }
}

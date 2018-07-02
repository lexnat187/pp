import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'
import {DebounceInput} from 'react-debounce-input';

class SearchBar extends Component {

    constructor () {
        super()
        this.state = {
            search: ''
        }
    }

  executeSearch = (searchQuery) => {
    const { search } = this.state
    this.props.actions.search(search, '', 1)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
    this.props.actions.search(event.target.value, '', 1)
  }

  keyPress = (event) => {
    if(event.keyCode === 13){
       this.executeSearch()
    }
  }

  render () {

    return (
        <div>
            <DebounceInput
                minLength={2}
                debounceTimeout={300}
                element={TextField}
                id="search"
                label="Recipe search..."
                type="search"
                onChange={this.handleChange('search')}
                margin="normal"
                onKeyDown={this.keyPress}
            />
            <IconButton onClick={this.executeSearch} >
                <Icon>search</Icon>
            </IconButton>

        </div>
    )
  }
}

SearchBar.propTypes = {
    search: PropTypes.func.isRequired
}

export default SearchBar
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ResultItem from './ResultItem'

const STYLES = {
  topParent:{
    style: {
        display: 'inline-block',
        marginTop: '20px'
    }
  }
}

const Content = styled.div`
    display: grid;
    grid-gap: 5px;
    padding-left: 10px;
    padding-right: 10px;
`;

class Results extends Component {

    constructor() {
        super()
        this.state = {
            results: []
        }
    }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.searchResult && this.props.searchResult !== nextProps.searchResult) {
        this.setState({
            results: nextProps.searchResult.results
        })
    }
  }

  renderResults = () => {
    const { results } = this.state

    let resultsToRender 
    if (results){
        resultsToRender = results.map((result, index) => {
            if (index < 20) {
                return <ResultItem title={result.title} url={result.href} image={result.thumbnail} ingredients={result.ingredients} index={index} />
            }
        })
    } else {
        resultsToRender = ("...No Results...")
    }
    
    return resultsToRender
  }

  render () {
    return (
        <div style={STYLES.topParent.style}>
            <Content >
                {this.renderResults()}
            </Content>
        </div>
    )
  }
}

Results.propTypes = {
    searchResult: PropTypes.object,
}

export default Results
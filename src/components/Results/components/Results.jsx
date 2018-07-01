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
    grid-template-columns: repeat(2, 440px);
    grid-template-rows: repeat(auto-fit, 440px);
    @media (max-width: 1224px) {
        grid-template-columns: repeat(1, 440px);
    }
`;

class Results extends Component {

    constructor() {
        super()
        this.state = {
            results: {},
            baseIMGURL: ''
        }
    }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.searchResult && this.props.searchResult !== nextProps.searchResult) {
        this.setState({
            results: nextProps.searchResult
        })
    }
  }

  renderResults = () => {
    const { results } = this.state
    // const { baseIMGURL } = this.props

    let resultsToRender 
    if (results && results.hits){
        resultsToRender = results.hits.map((result, index) => {
            if (index < 20) {
                return <ResultItem title={result.title} url={result.url} image={result.image} ingredients={result.ingredients} />
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
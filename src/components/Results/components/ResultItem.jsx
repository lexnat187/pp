import React, { Component } from 'react'

const Entities = require('html-entities').AllHtmlEntities
const entities = new Entities()

const STYLES = {
    parent: {
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },
      imgStyle: {
        maxWidth: '400px',
        maxHeight: '400px'
      }
    }
  }

  const PRIMARY_COLOUR = 'WHITE'
  const ITERATING_COLOUR = '#d4d4d4'

export default class ResultItem extends Component {

    constructor() {
        super()
        this.state = {
            renderCollapsed: true
        }
    }

    handleCollapse = () => {
        const { renderCollapsed } = this.state
        this.setState({renderCollapsed: !renderCollapsed})
    }

    convertString = (string) => {
        return entities.decode(string)
    }

    renderCollapsed = () => {
        const { title, index } = this.props
        let colour = index % 2 === 0 
        return (
            <div style={{ backgroundColor: colour ? ITERATING_COLOUR : PRIMARY_COLOUR }}
                onClick={this.handleCollapse} >
                Title: {this.convertString(title)}
            </div>
        )
    }
    
    renderExpanded = () => {
        const { title, url, image, ingredients, index } = this.props
        let colour = index % 2 === 0 
        return(
            <div style={{ backgroundColor: colour ? ITERATING_COLOUR : PRIMARY_COLOUR }}>

                <div onClick={this.handleCollapse}>
                    Title: {this.convertString(title)}
                    <br />
                    Ingredients: {this.convertString(ingredients)}
                    <br />
                </div>
                Link: <a href={url} target="_blank"> {url} </a>
                <br />
                <img 
                    style={STYLES.parent.imgStyle} 
                    key={image} 
                    src={`${image}`} 
                    alt="" className="img-responsive" 
                />
                </div>
        )
    }

    render () {
        const { renderCollapsed } = this.state

        return(
            renderCollapsed ? this.renderCollapsed() : this.renderExpanded()
        )
    }
}
import React, { Component } from 'react'

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

export default class ResultItem extends Component {
    render () {
        const { title, url, image, ingredients } = this.props

        return(
            <div style={STYLES.parent.style}>
                <div>
                    Title: {title}
                    <br />
                    Link: <a href={url} target="_blank"> {url} </a>
                    <br />
                    Ingredients: {ingredients}
                    <br />
                </div>
                <img 
                  style={STYLES.parent.imgStyle} 
                  key={image} 
                  src={`${image}`} 
                  alt="" className="img-responsive" 
                />
             </div>
        )
    }
}
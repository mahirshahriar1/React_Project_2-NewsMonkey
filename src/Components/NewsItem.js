import React, { Component } from 'react'


 

export class NewsItem extends Component {
  
  render() {
  
    let { title, description, imageUrl,newsUrl,author,date,source } = this.props;
    return (
     
      <div className="my-3">
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: 1}}>
            {source}   
        </span >
          <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg  "} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.length>45?title.slice(0,45)+"...":title}</h5>
            {/* {console.log(title.length)} */}
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem



import React, { Component } from 'react'


 

export class NewsItem extends Component {
  
  render() {
  
    let { title, description, imageUrl,newsUrl } = this.props;
    return (
     
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.length>45?title.slice(0,45)+"...":title}</h5>
            {/* {console.log(title.length)} */}
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem



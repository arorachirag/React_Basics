import React, { Component} from 'react'


export default class NewsItem extends Component {

  render() {
    let {title,description,imageurl,url,author,time,source} = this.props;
    return (
    
    <div className="card" style={{margin:'30px 10px'}} >
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"70%"}}>{source}</span>
        <img src={imageurl} class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p><small className="card-text text-muted">{author?author:"Unknown"} at {time}</small></p>
          <a href={url} className="btn btn-sm btn-primary">Go somewhere</a>
        </div>
    </div>
      
    )
  }
}

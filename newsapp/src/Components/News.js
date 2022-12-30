import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            articles  :[],
            totalResults : 0
        }
    }

    async componentDidMount(){
        
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=e56e4aab797d4fb5bc6f2173c332394e&page=1&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let out = await data.json();
        this.setState({articles:out.articles,totalResults : out.totalResults})
        
    }
    
    handle = async()=>{
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e56e4aab797d4fb5bc6f2173c332394e&page=${this.state.page+1}`;
        let data = await fetch(url);
        let out = await data.json();
        
        this.setState({
            page: this.state.page + 1,
            articles: out.articles,
            totalResults : out.totalResults
        })
    }

    prev = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e56e4aab797d4fb5bc6f2173c332394e&page=${this.state.page-1}`;
        let data = await fetch(url);
        let out = await data.json();
        
        this.setState({
            page: this.state.page - 1,
            articles: out.articles,
            totalResults : out.totalResults
        })

    }

    fetchMoreData = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e56e4aab797d4fb5bc6f2173c332394e`;
        let data = await fetch(url);
        let out = await data.json();
        this.setState({
            articles: this.state.articles.concat(out.articles)
        })
    }
    render() {
    return (
    <div className='container my-3'>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >    
      <div className='row mx-5'>
      {this.state.articles && this.state.articles.map((element)=>{
            return <div className='col-md-5' >
                <NewsItem  title = {element.title} description = {element.description} imageurl = {element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
            </div>
            })}
        
      </div>
      </InfiniteScroll> 
      <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-primary" onClick={this.prev} >Previous</button>
        <button type="button" class="btn btn-secondary" onClick={this.handle}>Next</button>
      </div>
      </div>
    )
  }
}

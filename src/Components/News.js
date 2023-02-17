import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      track: false
    }
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }


  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f51b049428342edb947651005b0bbd9&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState(
      {
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false

      }
    )
  }

  async componentDidMount() {
    this.updateNews();
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  fetchMoreData = async () => {
    // console.log(this.state.page);
    // await this.setState({  page: this.state.page + 1}, () => {
    //   console.log(this.state.page);
    // }); 

         
    this.setState({ page: this.state.page + 1 });
    await this.sleep(100);
      
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };



  render() {

    let x = "CVS digs into primary care with $9.5 bln Oak Street Health deal - Reuters";
    return (
      <div >
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>          NewsMonkey - Top {this.capitalize(this.props.category)} Headlines     </h1>
        {this.state.loading && <Spinner />}


        <InfiniteScroll
          // style={{ overflow: 'none' }} css file check
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner></Spinner>}
        >
          <div className="container">

            <div className="row">
              {this.state.articles.map((element) => {
                return element.title !== x && <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}

            </div>
          </div>
        </InfiniteScroll>

      </div>
    )
  }
}

export default News
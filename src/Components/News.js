import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  // article = [
  //   // {
  //   //   "source": {
  //   //     "id": "news-com-au",
  //   //     "name": "News.com.au"
  //   //   },
  //   //   "author": null,
  //   //   "title": "Legend blasts Indian pitch ‘cheating’ claim",
  //   //   "description": "India cricket great Ravi Shastri has savaged claims the nation is “cheating” with its handling of the Nagpur pitch for the first Test against Australia.",
  //   //   "url": "https://www.news.com.au/sport/cricket/thats-bullst-indian-legend-savages-cheating-claims-over-controversial-first-test-pitch/news-story/50ce8e45fd93ef3a5a934ccd0bac9043",
  //   //   "urlToImage": "https://content.api.news/v3/images/bin/8fc1ecdef187bd3fe1c4ace44dca7d9d",
  //   //   "publishedAt": "2023-02-08T08:15:00Z",
  //   //   "content": "India cricket great Ravi Shastri has savaged claims the nation is “cheating” with its handling of the Nagpur pitch for the first Test against Australia.\r\nControversy has broken out in the days before… [+2856 chars]"
  //   // },
  //   // {
  //   //   "source": {
  //   //     "id": "espn-cric-info",
  //   //     "name": "ESPN Cric Info"
  //   //   },
  //   //   "author": null,
  //   //   "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //   //   "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //   //   "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //   //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //   //   "publishedAt": "2020-04-27T11:41:47Z",
  //   //   "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   // },
  //   // {
  //   //   "source": {
  //   //     "id": "espn-cric-info",
  //   //     "name": "ESPN Cric Info"
  //   //   },
  //   //   "author": null,
  //   //   "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //   //   "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //   //   "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //   //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //   //   "publishedAt": "2020-03-30T15:26:05Z",
  //   //   "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   // },
  //   // {
  //   //   "source": {
  //   //     "id": "espn-cric-info",
  //   //     "name": "ESPN Cric Info"
  //   //   },
  //   //   "author": null,
  //   //   "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //   //   "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //   //   "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-agan",
  //   //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //   //   "publishedAt": "2020-03-30T15:26:05Z",
  //   //   "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   // }
    
  // ]
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f51b049428342edb947651005b0bbd9";
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }

  render() {

    let x="CVS digs into primary care with $9.5 bln Oak Street Health deal - Reuters";
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {

            return element.title!==x && <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description?element.description:""}
                imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>

          })}
        </div>
      </div>
    )
  }
}

export default News
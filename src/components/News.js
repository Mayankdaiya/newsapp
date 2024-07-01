import React, { useState, useEffect, useContext } from 'react'
import NewsItems from './NewsItems'
import loading from '../images/loading.png'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Theme from '../context/Theme';


const News = (props) => {
    const [news, setNews] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)
    const {theme} = useContext(Theme)

    const getTitle = (title) => {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }

    useEffect(()=>{
        document.title = `${getTitle(props.category)} - DailyNews`
        fetchMoreData()
    },[])


    const fetchMoreData = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pagesize}`
        props.setProgress(30)
        let data = await fetch(url)
        let parsedData = await data.json()
        props.setProgress(60)
        setTotalResults(parsedData.totalResults)
        setPage(page + 1)
        setNews(news.concat(parsedData.articles))
        props.setProgress(100)
        console.log(news.length) 
        console.log(totalResults)
    }

    return (
        <>
            <div className='mt-5'></div>
            <hr />
            <h2 className='text-center' style={{color: theme==="light"?"black":"white" ,fontFamily: 'serif'}}>DailyNews - Top {getTitle(props.category)} Headlines</h2>
            <InfiniteScroll
                dataLength={news.length}
                next={fetchMoreData}
                hasMore={news.length !== totalResults}
                loader={<h4 className='text-center'><img src={loading} alt='loading..' /></h4>}
            >
                <div className="container my-1">
                    <div className="row">
                        {news.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItems title={element.title} description={element.description} imgurl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}
News.defaultProps = {
    country: "in",
    category: "general",
    pagesize: 6
}
News.propTyps = {
    county: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
    apiKey: PropTypes.string
}

export default News

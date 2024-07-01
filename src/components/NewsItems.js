import React, { useContext } from 'react'
import defaultimg from "../images/default.jpg"
import Theme from '../context/Theme';

const NewsItems = (props) => {
    let { title, description, imgurl, url, author, time, source } = props
    const {theme} = useContext(Theme)
    return (
        <div className='my-3'>
            <div className="card shadow" style={{color: theme==="light"?"black":"white", backgroundColor: theme==="light"?"white":"#222831"}}>
                <span className="badge rounded-pill bg-success" style={{ position: "absolute" }}>{source}</span>
                <img src={imgurl ? imgurl : defaultimg} className="card-img-top card-deck" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div><p className="card-text">{description}</p></div>
                    <div>
                        <sub className='card-text' style={{}}>Last Updated on {new Date(time).toGMTString()}</sub>
                    </div>
                    <p className="card-text"><sub>By {author ? author : "Unknown"}</sub></p>
                    <a href={url} className="btn btn-dark" target='_blank' rel='noreferrer' style={{backgroundColor: theme==="light"?"":"#76ABAE", color: theme==="light"?"white":"black"}}>Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItems


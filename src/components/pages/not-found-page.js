import React from 'react'
import {Link} from 'react-router-dom'
import NotFoundImg from '../../rest_img/not_f.jpg'


const pageStyle = {
    padding: '2%',
    height: 'calc(100vh - 60px - 50px)',
    textAlign: 'center',
    textShadow: '1px 1px 2px #fff'
}

const imgStyle = {
    width: '30%',
    margin: '1% 1% 0%'
}

const linkStyle = {
    fontSize: '1.5rem',
    textDecoration: 'underline',
    margin: '0%'
}


const NotFoundPage = () => {
    return (
        <div className="notFoundPage" style={pageStyle}>
            <h1>Sorry, this page is not found </h1>
            <img src = {NotFoundImg} alt="not found page img" style={imgStyle}/>
            <br/><br/>
            <Link to="/" style={linkStyle}>Back to Home page <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">&#128408;</span></Link>
        </div>
    )
}

export default NotFoundPage
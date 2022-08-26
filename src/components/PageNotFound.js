import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./css/PageNotFound.css";

const PageNotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "GNC-NotFound"
      }, [])
    return (
        <div id="NotFound">
            <div className="NotFoundcontent">
                <h1>404</h1>
                <h2>Oops! This Page Could Not Be Found</h2>
                <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
                <Link to="/"><button>Go To Homepage</button></Link>
            </div>
        </div>
    )
}

export default PageNotFound;
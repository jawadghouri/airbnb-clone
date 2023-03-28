import React from 'react'
import './Banner.css'
import { Button } from '@mui/material';
import Search from './Search';
import { useNavigate } from 'react-router-dom'


function Banner() {
    const navigate = useNavigate()
    const [showSearch, setShowSearch] = React.useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton' 
                    varient='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch you imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gem near you</h5>
                <Button 
                    onClick={() => navigate('/search')}
                    varient='outlined'>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner

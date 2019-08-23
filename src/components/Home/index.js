import React from 'react';
import axios from 'axios';

import Header from '../header';
import Banner from './banner';
import ArtistsList from './artistList';

const URL_ARTIST = "http://localhost:3004/artists";

class Home extends React.Component {

    state = {
        artists:''
    }

    componentDidMount() {
        axios.get(URL_ARTIST).then( response => {
            this.setState({
                artists: response.data
            })
        })
    }

    render(){
        console.log(this.state)
        return(
            <>
                <Header />
                <Banner />
                <ArtistsList allArtists={this.state.artists}/>
            </>
        )
    }
}

export default Home;
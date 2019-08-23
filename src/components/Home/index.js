import React from 'react';
import axios from 'axios';

import Header from '../header';
import Banner from './banner';

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
        console.log(this.state.artists)
        return(
            <>
                <Header />
                <Banner />
            </>
        )
    }
}

export default Home;
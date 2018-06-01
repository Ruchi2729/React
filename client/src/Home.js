import React, {Component} from 'react'
import './Search'
import Search from "./Search";



class Home extends Component {
    render() {
        return (

<div className='container1'>
            <div id="home-sec" className="player">


                <Search/>

            </div>

            <div id='result'></div>
</div>







        );
    }
}



export default Home
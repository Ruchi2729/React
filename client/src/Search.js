import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const API_URL = 'http://www.omdbapi.com/?y=&plot=short&r=json&apikey=64742845'

// const Suggestions = (props) => {
//     const options = props.results.map(r => (
//       <div>
//           <div><img src={r.Poster} alt="boohoo" className="img-responsive"/></div>;
//     {r.Title}  {r.Year} {r.Genre}
//       </div>
//
//
//     ))
//     return <ul>{options}</ul>
// }

const initialState = {
    query: '',
    results:[]
};
var divStyle = {
    width:'100%',
height:'100%',
display:'block',
alignSelfelf: 'center',
    margin: 'auto',


};

var divStyle2 = {
    width:'50%',
    height:'100%',
    alignSelfelf: 'center',
    position:'relative',
    float:'left'


};
var divStyle3 = {
    width:'50%',
    height:'100%',
    alignSelfelf: 'center',
    position:'relative',
    float:'right'


};

var imgStyle = {
    width:'100%',
    height:'100%',



};



class Search extends Component {

    state = initialState;
    reset() {
        this.setState(initialState);
    }
    getInfo = () => {
        axios.get(`${API_URL}&t=${this.state.query}`)
            .then(({ data }) => {
                const arr=[data]
                this.setState({
                    results: arr
                })
            }).then(()=>{
           // divStyle.backgroundImage='url(' + this.state.results[0].Poster + ')'
            const options = this.state.results.map(r => (

                <div style={divStyle} >
                    {/*<img src={r.Poster} alt="boohoo" className="img-responsive"/>;*/}
                    <div style={divStyle2} > <h3><li>Name : {r.Title} </li><li>Director: {r.Director}</li> <li>Writer: {r.Writer}</li><li>Actors: {r.Actors}</li><li>Release Year: {r.Year} </li><li>Genre: {r.Genre}</li><li>Plot: {r.Plot}</li><li>Awards: {r.Awards}</li></h3></div>


                    <div style={divStyle3}><img  style={imgStyle} src={r.Poster} alt="boohoo" className="img-responsive"/></div>

                </div>


            ));
                ReactDOM.render(options,document.getElementById('result'));
        })
    }


    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }

            }
            else
            {
                this.reset();
                ReactDOM.render(null,document.getElementById('result'));

            }
        })
    }


    render() {
        return (
            <div className="srch">
                <h4> Search and Know about any movie you want to know About!!
                    </h4>
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
                {/*<Suggestions results={this.state.results} />*/}
            </form>
            </div>
        )
    }
}

export default Search


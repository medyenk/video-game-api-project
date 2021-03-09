import React, { Component }  from 'react';
// import VideoGameList from '../components/VideoGameList';
var axios = require('axios');

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    search: '',
    url: 'https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/characters/?api_key=c8c34267ec67785f30773943e5d622ac3f49c4c2&filter=name:'
  }

  

  fetchData = async () => {
    console.log("Fetching...")
    const url = this.state.url + this.state.search
    const response = await axios({
      method: 'get',
      url: url,
      headers: {'Content-Type': 'text/plain'}
    })
    const data = await response.data
    console.log(data)
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
    console.log(this.state.search)
  }

  handleSubmit() {
    this.fetchData()
  }

  render() {
    return (
      <div>
        <h1>VideoGame List</h1>
      <form>
        <input type="text" value={this.state.search} onChange={(e) => this.handleChange(e)}/>
        <input type="button" onClick={this.handleSubmit}  placeholder="Search..." />
      </form>
      </div>
    )
  }
}

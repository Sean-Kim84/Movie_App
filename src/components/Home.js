import React from 'react';
import axios from 'axios';

class Home extends React.Component {

  state = {
    isLoading: false,
    movies: []
  }

  getMovies =  async () => {
    const movies =  await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    return(
      <div>
        This is Home
      </div>
    )
  }
}

export default Home;
import React from 'react';
import axios from 'axios';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }


componentDidMount() {
  var url = 'http://localhost:3001/products'
    axios.get(url)
    .then((results) => {
      console.log(results)
      this.setState({products: results.data})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  render() {
    return (
      <div className='app-main'>
      </div>
    );
  }
}

export default MainContainer;
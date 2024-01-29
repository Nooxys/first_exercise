import { Component } from 'react'

class ImageComponent extends Component {
  render() {
    return <img src={this.props.fotoSource} alt={this.props.altSource} />
  }
}

export default ImageComponent

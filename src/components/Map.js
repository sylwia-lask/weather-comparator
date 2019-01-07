import React from 'react';
import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay';
import { CityDescriptionContainer } from './CityDescription';

export class SimpleMap extends React.Component {

  constructor() {
    super(); 
    this.state = { mapHeight: window.innerHeight - 55};
  }

  componentDidMount() {
    if (window.innerWidth <= 576) {
      this.setState({mapHeight: 370})
    }
  }

  render() {
    return (
      <div>
        {this.props.chosenPlace ?
          <Map
            center={[this.props.chosenPlace.coord.lat, this.props.chosenPlace.coord.lon]} 
            zoom={10} height={this.state.mapHeight} 
            onClick={this.handleChange}>
            <Overlay anchor={[this.props.chosenPlace.coord.lat, this.props.chosenPlace.coord.lon]}
             offset={[0, 0]} className="pigeon-click-block">
              <CityDescriptionContainer />
            </Overlay>
          </Map>
          : null
        }
      </div>
    )
  }

  handleChange = ({ latLng }) => {
    this.props.choosePlaceFromMap(latLng);
  }
}

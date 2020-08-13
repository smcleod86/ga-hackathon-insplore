import { Component } from 'react'
import ReactMapGL from 'react-map-gl'

class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 48.5124,
      longitude: 2.2108,
      zoom: 13
    }
  };

  render() {
    return (
      <div>
        <div>
          {console.log(process.env.NEXT_PUBLIC_MAPBOX_API_KEY)}
        </div>
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
        />
      </div>
    );
  }
}

export default Map;
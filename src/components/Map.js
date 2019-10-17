import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from 'react-google-maps'

const Map = compose(
  withStateHandlers(
    () => ({
      isMarkerShown: false,
      markerPosition: null
    }),
    {
      onMapClick: ({ isMarkerShown }) => e => ({
        markerPosition: e.latLng,
        isMarkerShown: true
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} />}
  </GoogleMap>
))
export default class MapContainer extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmtWzMyE7IPJhcoVLJNFISfzNmp6og3nE"
          loadingElement={<div style={{ width: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

// export default function MapContainer(){
//   const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 })
//   const [zoom, setZoom] = useState(11)

//   return (
//     <div style={{width: '100%' }}>
//       <Map
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       >
//       </Map>
//     </div>
//   )
// }

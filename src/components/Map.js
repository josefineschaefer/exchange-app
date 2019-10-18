import React, { useState, useEffect } from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'
import { getMarkers, postMarker, patchMarker } from '../services'

const API_KEY = process.env.REACT_APP_GOOGLE_KEY

function Map() {
  const [markers, setMarkers] = useState([])
  const [selectedMarker, setSelectedMarker] = useState()
  const [markerText, setMarkerText] = useState('')

  useEffect(() => {
    getMarkers().then(setMarkers)
  }, [])

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      onClick={createMarker}
    >
      {markers.map(marker => (
        <Marker
        key={marker._id}
          position={{
            lat: marker.latLng.lat,
            lng: marker.latLng.lng
          }}
          onClick={() => {
            setSelectedMarker(marker)
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedMarker(null)
          }}
          position={{
            lat: selectedMarker.latLng.lat,
            lng: selectedMarker.latLng.lng
          }}
        >
          <form onSubmit={event => handleSubmit(event, selectedMarker, markerText)}>
            <input
              type="text"
              placeholder="Füge Text hinzu"
              name="markerText"
              value={markerText}
              onChange={event => setMarkerText(event.target.value)}
            />
            <p>{selectedMarker.content}</p>
          </form>
        </InfoWindow>
      )}
    </GoogleMap>
  )

  function handleSubmit(event, selectedMarker, newMarkerText) {
    event.preventDefault()
    selectedMarker.content = newMarkerText
    setMarkerText('')
    editMarker(selectedMarker._id, {content: newMarkerText})
  }

  function editMarker(id, data) {
    patchMarker(id, data).then(selectedMarker => {
      const index = markers.findIndex(marker => marker._id === selectedMarker._id)
      setMarkers([
        ...markers.slice(0, index),
        selectedMarker,
        ...markers.slice(index + 1)
      ])
    })
  }

  function createMarker(markerPosition) {
    postMarker(markerPosition).then(marker => {
      setMarkers([...markers, marker])
    })
  }
}



// function deleteMarkers(id, markers) {
//   deleteMarker(id).then(selectedMarker => {
//     const index = markers.findIndex(marker => marker._id === selectedMarker._id)
//     return setMarkers([
//       ...markers.slice(0, index),
//       ...markers.slice(index + 1)
//     ])
//   })
// }

const MapWrapped = withScriptjs(withGoogleMap(Map))

export default function MapContainer() {
  return (
    <div style={{ height: '100%' }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`}
        loadingElement={<div style={{ width: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

// import React, { useState, useEffect } from 'react'
// import { compose, withStateHandlers } from 'recompose'
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker
// } from 'react-google-maps'
// import { getMarkers, patchMarker, postMarker, deleteMarker } from '../services'

// const API_KEY = process.env.REACT_APP_GOOGLE_KEY

// const Map = compose(
//   withStateHandlers(
//     ({ markers, setMarkers }) => ({
//       markers: markers,
//       setMarkers: setMarkers,
//     }),
//     {
//       onMapClick: ({ markers, setMarkers}) => e => {
//         const newMarkers = [...markers, e.latLng]
//         setMarkers(newMarkers)
//         return ({
//         markers: newMarkers
//       })}
//     }
//   ),
//   withScriptjs,
//   withGoogleMap
// )(props => (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map(markerPosition => <Marker position={markerPosition} />)}
//   </GoogleMap>
// ))

// export default function MapContainer() {

//   useEffect(() => {
//     getMarkers().then(setMarkers)
//   }, [])

//   const [markers, setMarkers] = useState([])

//   return (
//     console.log('markers', markers),
//     <div style={{ height: '100%' }}>
//       <Map
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`}
//         loadingElement={<div style={{ width: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//         markers={markers}
//         setMarkers={setMarkers}
//       />
//     </div>
//   )

import axios from 'axios'

export function uploadImage(event) {
  const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
  const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET
  const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

  const formData = new FormData()
  formData.append('file', event.target.files[0])
  formData.append('upload_preset', PRESET)

  return axios.post(url, formData, {
    headers: {
      'Content-type': 'multipart/form-data'
    }
  })
}

export function getEntries() {
  return fetchEntries()
}

export function postEntry(data) {
  return fetchEntries({ method: 'POST', data })
}

export function patchEntry(id, data) {
  return fetchEntries({ method: 'PATCH', id, data })
}

export function deleteEntry(id) {
  return fetchEntries({ method: 'DELETE', id })
}

function fetchEntries({ method = 'GET', id = '', data } = {}) {
  return fetch('/entries/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

// Services for markers

export function getMarkers() {
  return fetchMarkers()
}

export function postMarker(data) {
  return fetchMarkers({ method: 'POST', data })
}

export function patchMarker(id, data) {
  return fetchMarkers({ method: 'PATCH', id, data })
}

export function deleteMarker(id) {
  return fetchMarkers({ method: 'DELETE', id })
}

function fetchMarkers({ method = 'GET', id = '', data } = {}) {
  return fetch('/markers/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

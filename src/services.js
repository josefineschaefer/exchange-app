export function getEntries() {
  return fetchEntries()
}

export function postEntry(data) {
  return fetchEntries({ method: 'POST', data })
}

export function patchEntry(id, data) {
  return fetchEntries({ method: 'PATCH', id, data })
}

export function deleteEntry(id){
  return fetchEntries({method: 'DELETE', id})
}

function fetchEntries({ method = 'GET', id = '', data } = {}) {
  return fetch('/entries/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function getImages() {
  return fetchImages()
}

function fetchImages({ method = 'GET', id = '', data } = {}) {
  return fetch('/images/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

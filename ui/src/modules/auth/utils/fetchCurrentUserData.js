const options = {
  headers: {
    'Accept': 'application/json'
  }
}

export default () =>
  fetch('/user/current/', options)
    .then(response => response.json())

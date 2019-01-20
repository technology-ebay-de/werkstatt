const options = {
  headers: {
    'Accept': 'application/json'
  }
}

export default (id) => fetch('/sketchpad/' + id, options)
  .then(response => response.json())
  .then(data => ({
    ...data,
    codeBlocks: data.codeBlocks && Object.keys(data.codeBlocks).map(id => data.codeBlocks[id])
  }))

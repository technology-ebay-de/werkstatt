export default (id) => fetch('/api/sketchpad/' + id + '/')
  .then(response => response.json())
  .then(data => ({
    ...data,
    codeBlocks: data.codeBlocks && Object.keys(data.codeBlocks).map(id => data.codeBlocks[id])
  }))

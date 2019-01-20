import { removeKeysFromObject } from 'utils'

const options = {
  headers: {
    'Accept': 'application/json'
  }
}

export default ({ limit = null }) => {
  const data = fetch('/sketchpad', options)
    .then(response => response.json())
    .then(sketchPadData => Object.keys(sketchPadData)
      .map(id => ({
        ...sketchPadData[id],
        codeBlockCount: Object.keys(sketchPadData[id].codeBlocks).length
      }))
      .map(item => removeKeysFromObject(item, 'codeBlocks')))
    .then(sketchPadData => {
      if (limit !== null) {
        sketchPadData.length = limit
      }
      return sketchPadData
    })

  return data
}

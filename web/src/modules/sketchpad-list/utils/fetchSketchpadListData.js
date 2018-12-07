import sketchPadData from 'src/dummy-data/sketch-pad.json'
import { removeKeysFromObject } from 'src/utils'

export default ({ limit = null }) => {
  const data = Object.keys(sketchPadData).map(id => ({
    ...sketchPadData[id],
    codeBlockCount: Object.keys(sketchPadData[id].codeBlocks).length
  })).map(item => removeKeysFromObject(item, 'codeBlocks'))

  if (limit !== null) {
    data.length = limit
    return data
  }
  return data
}

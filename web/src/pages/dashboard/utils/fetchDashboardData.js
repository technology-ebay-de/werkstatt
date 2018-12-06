import sketchPadData from 'src/dummy-data/sketch-pad.json'
import { removeKeysFromObject } from 'src/utils'

export default () => {
  const data = Object.keys(sketchPadData).map(id => ({
    ...sketchPadData[id],
    codeBlockCount: Object.keys(sketchPadData[id].codeBlocks).length
  }))

  return {
    sketchPadList: data.map(item => removeKeysFromObject(item, 'codeBlocks'))
  }
}

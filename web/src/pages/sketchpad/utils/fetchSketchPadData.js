import sketchPadData from '../../../dummy-data/sketch-pad.json'

export default (id) => {
  const data = sketchPadData[id]

  return {
    ...data,
    codeBlocks: data.codeBlocks && Object.keys(data.codeBlocks).map(id => data.codeBlocks[id])
  }
}

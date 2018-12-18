import React from 'react'
import PropTypes from 'prop-types'
import SketchpadItem from '../SketchpadItem'

const SketchpadList = ({ sketchpadList }) => {
  console.log(sketchpadList)
  if (!sketchpadList) {
    return <div>No Sketchpad found</div>
  }

  return sketchpadList.map(item => <SketchpadItem key={item.id} {...item} />)
}

SketchpadList.propTypes = {
  sketchpadList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    codeBlockCount: PropTypes.number
  }))
}

SketchpadList.displayName = 'SketchpadList'

export default SketchpadList

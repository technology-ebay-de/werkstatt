import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, BarChart } from 'src/modules/chart'
import Table from 'src/modules/table'

const Output = ({ output: { type, data } }) => {
  switch (type) {
    case 'linechart':
      return <LineChart data={data} />
    case 'barchart':
      return <BarChart data={data} />
    case 'table':
      return <Table data={data} />
    default:
      return <div>Unsupported output type</div>
  }
}

Output.propTypes = {
  output: PropTypes.shape({
    type: PropTypes.string,
    data: PropTypes.any
  }).isRequired
}

Output.displayName = 'Output'

export default Output

import React from 'react'
import PropTypes from 'prop-types'
import { LineChart as Chart, Line, Tooltip, XAxis, YAxis } from 'recharts'

const LineChart = ({ data }) => (
  <Chart width={400} height={400} data={data}>
    <XAxis dataKey='name' />
    <YAxis />
    <Tooltip />
    <Line type='monotone' dataKey='value' stroke='#8884d8' />
  </Chart>
)

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number
  }))
}

LineChart.displayName = 'LineChart'

export default LineChart

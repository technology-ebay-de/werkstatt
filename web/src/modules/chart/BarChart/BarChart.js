import React from 'react'
import PropTypes from 'prop-types'
import { BarChart as Chart, Bar, Tooltip, XAxis, YAxis } from 'recharts'

const BarChart = ({ data }) => (
  <Chart width={400} height={400} data={data}>
    <XAxis dataKey='name' />
    <YAxis />
    <Tooltip />
    <Bar type='monotone' dataKey='value' stroke='#8884d8' />
  </Chart>
)

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number
  })).isRequired
}

BarChart.displayName = 'BarChart'

export default BarChart

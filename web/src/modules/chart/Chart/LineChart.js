import React from 'react'
import { LineChart as Chart, Line, Tooltip, XAxis, YAxis } from 'recharts'

export default function LineChart ({ data }) {
  return <Chart width={400} height={400} data={data}>
    <XAxis dataKey='name' />
    <YAxis />
    <Tooltip />
    <Line type='monotone' dataKey='value' stroke='#8884d8' />
  </Chart>
}

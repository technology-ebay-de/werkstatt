import React from 'react'
import { BarChart as Chart, Bar, Tooltip, XAxis, YAxis } from 'recharts'

export default function BarChart ({ data }) {
  return <Chart width={400} height={400} data={data}>
    <XAxis dataKey='name' />
    <YAxis />
    <Tooltip />
    <Bar type='monotone' dataKey='value' stroke='#8884d8' />
  </Chart>
}

import React from 'react'
import { LineChart, BarChart } from '../Chart'

export default function Output ({ output: { type, data } }) {
  switch (type) {
    case 'linechart':
      return <LineChart data={data} />
    case 'barchart':
      return <BarChart data={data} />
    default:
      return <div>Unsupported output type</div>
  }
}

import React from 'react'
import { LineChart, BarChart } from '../Chart'
import Table from '../Table'

export default function Output ({ output: { type, data } }) {
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

import React from 'react'
import 'react-table/react-table.css'
import ReactTable from 'react-table'

const Table = ({ data: { data, columns } }) =>
  <ReactTable data={data} columns={columns} />

export default Table

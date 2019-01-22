import React from 'react'
import PropTypes from 'prop-types'
import 'react-table/react-table.css'
import ReactTable from 'react-table'

const Table = ({ data: { data, columns } }) =>
  <ReactTable data={data} columns={columns} />

Table.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.any,
    columns: PropTypes.any
  }).isRequired
}

Table.displayName = 'Tabele'

export default Table

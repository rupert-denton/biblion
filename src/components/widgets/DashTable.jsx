import React, { useEffect, useState } from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

export default function DashTable(props) {
  const columnHeaders = props.tableData
    ? Object.keys(props.tableData[0]).map((key, i) => {
        return <Th key={i}>{key.toUpperCase()}</Th>
      })
    : ''

  const tableRows = props.tableData
    ? props.tableData.map((data, i) => {
        console.log(data)
        return (
          <Tr key={i}>
            <Td>{data.id}</Td>
            <Td>{data.title}</Td>
            <Td className="table-blurb">{data.blurb}</Td>
            <Td>{data.author}</Td>
            <Td>{data.cover_image}</Td>
            <Td>{data.pub_year}</Td>
            <Td>{data.genre}</Td>
          </Tr>
        )
      })
    : ''

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>{columnHeaders}</Tr>
        </Thead>
        <Tbody>{tableRows}</Tbody>
        <Tfoot>
          <Tr>{columnHeaders}</Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'

const Box = () => {
  return (
    <div className="box">
      <Table.Row>
        <Link to="/create">
          <Table.Cell>
              <Button>Create</Button>
          </Table.Cell>
        </Link>
        <Link to="/read">
          <Table.Cell>
              <Button>Read</Button>
          </Table.Cell>
        </Link>
      </Table.Row>
    </div>
  )
}

export default Box

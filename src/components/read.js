import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import Box from './Box'

const Read = () => {
  const [APIdata, setAPIData] = useState([])
  const getData = () => {
    axios.get("https://613dbc7b94dbd600172ab9bf.mockapi.io/crud")
      .then((res) => setAPIData(res.data))
  }

  useEffect(() => {
    getData()
  },[])

  const setData = (item) => {
    // store data locally in the browser
    let {id, firstName, lastName, checkbox} = item
    localStorage.setItem("ID", id)
    localStorage.setItem("First Name", firstName)
    localStorage.setItem("Last Name", lastName)
    localStorage.setItem("Checkbox Value", checkbox)
  }

  const onDelete = (id) => {
    // setAPIData(APIdata.filter(item => item.id !== id))
    axios.delete(`https://613dbc7b94dbd600172ab9bf.mockapi.io/crud/${id}`)
      .then(() => getData())
  }

  if(APIdata){
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIdata && APIdata.map(item => (
            <Table.Row>
              <Table.Cell>{item.firstName}</Table.Cell>
              <Table.Cell>{item.lastName}</Table.Cell>
              <Table.Cell>{item.checkbox ? "Checked" : "Unchecked"}</Table.Cell>
              <Link to="/update" >
                <Table.Cell>
                  <Button onClick={() => setData(item)}>Update</Button>
                </Table.Cell>
              </Link>
              <Table.Cell>
                  <Button onClick={() => onDelete(item.id)}>delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default Read

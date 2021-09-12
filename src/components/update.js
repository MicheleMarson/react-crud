import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {useHistory} from "react-router"

const Update = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [checkbox, setCheckbox] = useState(false)
  const [id, setId] = useState(null)
  let history = useHistory()

  useEffect(() => {
    setId(localStorage.getItem("ID"))
    setFirstName(localStorage.getItem("First Name"))
    setLastName(localStorage.getItem("Last Name"))
    setCheckbox(localStorage.getItem("Checkbox Value"))
  }, [])

  const updateData = () => {
    axios.put(`https://613dbc7b94dbd600172ab9bf.mockapi.io/crud/${id}`,{
      firstName,
      lastName,
      checkbox
    }).then(() => history.push("/read"))
  }

  return(
    <Form onSubmit={updateData} className="create">
      <Form.Field>
        <label>First Name</label>
        <input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox  onChange={() => setCheckbox(!checkbox)} value={checkbox} label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Update</Button>
    </Form>
  )
}

export default Update

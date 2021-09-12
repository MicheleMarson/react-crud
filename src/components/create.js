import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import {useHistory} from "react-router"

const Create = () => {
  const  [firstName, setFirstName] = useState("")
  const  [lastName, setLastName] = useState("")
  const  [checkbox, setCheckbox] = useState(false)
  let history = useHistory()

  const postData = () => {
    // at mockAPI
    axios.post("https://613dbc7b94dbd600172ab9bf.mockapi.io/crud", {
      firstName, //same as firstName:firstName
      lastName,
      checkbox
    }).then(() => history.push("/read"))
  }

  return(
    <Form onSubmit={postData} className="create">
      <Form.Field>
        <label>First Name</label>
        <input onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox  onChange={() => setCheckbox(!checkbox)} label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default Create
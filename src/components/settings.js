import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Settings = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const [dataSent, setDataSent] = useState(false)

  const url = `${appLocalizer.apiUrl}/wreactapp/v1/settings`

  function handleSubmit (e) {
    e.preventDefault()
    setDataSent(true)
    axios
      .post(
        url,
        {
          firstname,
          lastname,
          email
        },
        {
          headers: {
            'content-type': 'application/json',
            'X-WP-NONCE': appLocalizer.nonce
          }
        }
      )
      .then(res => {
        setDataSent(false)
      })
  }

  useEffect(() => {
    axios.get(url).then(res => {
      setFirstname(res.data.firstname)
      setLastname(res.data.lastname)
      setEmail(res.data.email)
    })
  }, [])

  return (
    <>
      <h1>WordPress Settings Component From React</h1>
      <div id='wp-settings-con'>
        <form action='' id='wp-settings-form' onSubmit={handleSubmit}>
          <table className='from-table' role='presentation'>
            <tbody>
              <tr>
                <th scope='row'>
                  <label htmlFor='firstname'>First Name: </label>
                </th>
                <td>
                  <input
                    className='regular-text'
                    type='text'
                    id='firstname'
                    name='firstname'
                    value={firstname}
                    onChange={e => {
                      setFirstname(e.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <label htmlFor='lastname'>Last Name: </label>
                </th>
                <td>
                  <input
                    className='regular-text'
                    type='text'
                    id='lastname'
                    name='lastname'
                    value={lastname}
                    onChange={e => {
                      setLastname(e.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <label htmlFor='email'>Email: </label>
                </th>
                <td>
                  <input
                    className='regular-text'
                    type='text'
                    id='email'
                    name='email'
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value)
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className='submit'>
            <button className='button button-primary' type='submit'>
              {dataSent ? 'Data is bening saved' : 'Save Data'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Settings

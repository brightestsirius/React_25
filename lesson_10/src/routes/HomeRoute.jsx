import React from 'react'

import Home from './../components/Home/Home'
import CountriesForm from './../components/CountriesForm/CountriesForm'

export default function HomeRoute() {
  return (
    <>
      <h3>Home Route</h3>
      <Home />
      <CountriesForm />
    </>
  )
}
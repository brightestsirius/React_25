import React from 'react'

import Accordion from './components/Accordion/Accordion'

export default function App() {
  return (
    <>
      <Accordion title={"Some title"}>
        <p>Some description</p>
      </Accordion>
    </>
  )
}
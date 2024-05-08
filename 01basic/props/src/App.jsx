/**
 *  porps: read-only properties that are shared among components.
 *  a parent component can send data to a child component
 *  <component key:value/>
 */

import Student from "./Students"

function App() {

  return (
    <>
        <Student name="kratosDnana" />
    </>
  )
}

export default App

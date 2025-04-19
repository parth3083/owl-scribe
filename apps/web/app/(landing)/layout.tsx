import React, { PropsWithChildren } from 'react'
import Navbar from '../../components/Navbar'

function layout({ children}:PropsWithChildren) {
  return (
    <>
    <Navbar/>

    { children}
</>
  )
}

export default layout
import React from 'react'
import { ItemCount } from './ItemCount'

export const Main = () => {
  return (
    <main>
     <>
        <ItemCount stock="5" initial={1}/>
     </>

    </main>
  )
}

export default Main
import React from 'react'
import PageMovie from '../PageMovie/PageMovie'
import { useParams } from 'react-router-dom'

export default function Movie1(props){

    const {page} = useParams();



  return (
    <div>
        <PageMovie id = {page}/>
    </div>
  )
}

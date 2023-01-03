import React from 'react'
import PageMovie from '../PageMovie/PageMovie'
import "./Movie1.css"
import { useParams } from 'react-router-dom'

export default function Movie1(props){

    const {page} = useParams();



  return (
    <div className='Movie1'>
        <PageMovie id = {page}/>
    </div>
  )
}

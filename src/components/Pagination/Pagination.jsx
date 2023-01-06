import React from 'react';
import "./Pagination.css"

export default function Pagination({perPage, allMovies, pan}){

    const pageNum=[]
    for(let i = 1; i<Math.ceil(allMovies/perPage)+1;i++){
        pageNum.push(i)
    }

    return <div className="pag">
    
            {pageNum.map(num =>(
                    <button onClick={() => pan(num)} class="button-19">{ num }</button>
            ))}
         
    </div>
}
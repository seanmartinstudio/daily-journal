import React, { useEffect, useState } from 'react'
import axios from 'axios'

const JournalEntry = ( {post, date, id} ) => {

  const handleDeleteButton = () => {
    axios.delete('http://localhost:3001/journalData' + id)
    .then((response) => {console.log(response)})
    }
    
    // handle button delete logic

  return (
    <ul>
        <h3 style={{fontStyle: "italic", textDecoration: "underline"}}>
            {date}
        </h3>
        <h4>
            {post}
        </h4>
        <button onClick={handleDeleteButton}>Delete Entry</button>
    </ul>
  )
}

export default JournalEntry
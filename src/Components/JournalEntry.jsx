import React, { useEffect, useState } from 'react'
import axios from 'axios'

const JournalEntry = ( {post, date, id, handleDeleteUI} ) => {

  // Deletes journal entry from json and envokes UI delete function in Read componenet
  const handleDeleteButton = () => {
    axios.delete('http://localhost:3001/journalData/' + id)
    .then(() => {handleDeleteUI(id)})
    }
  
    // implimenting like button
  const handleLikeButton = () => {
    const buttonNum = 0
  }

  return (
    <ul>
      <div id={id}>
        <h3 style={{fontStyle: "italic", textDecoration: "underline"}}>
            {date}
        </h3>
        <h4>
            {post}
        </h4>
        <button onClick={handleDeleteButton}>Delete Entry</button>
        {/* implimenting like button */}
        <button onClick={handleLikeButton}>Hello World</button>
      </div>
    </ul>
  )
}

export default JournalEntry
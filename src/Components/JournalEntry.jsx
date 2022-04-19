import React from 'react'

const JournalEntry = ( {post, date} ) => {

  return (
    <ul>
        <h3 style={{fontStyle: "italic", textDecoration: "underline"}}>
            {date}
        </h3>
        <h4>
            {post}
        </h4>
        <button>Delete Entry</button>
    </ul>
  )
}

export default JournalEntry
import React from 'react'

const JournalEntry = ( {post, date} ) => {

  return (
    <ul>
        <h3 style={{fontStyle: "italic"}}>
            {date}
        </h3>
        <h4>
            {post}
        </h4>
    </ul>
  )
}

export default JournalEntry
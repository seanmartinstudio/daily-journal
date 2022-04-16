import React from 'react'

const JournalEntry = ( {post} ) => {

  return (
    <ul>
        <h4>
            Read Your Life
        </h4>
        <h3>
            {post}
        </h3>
    </ul>
  )
}

export default JournalEntry
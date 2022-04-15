import React from 'react'

const JournalEntry = ( {post} ) => {

  return (
    <li>
        <h4>
            Read Your Life
        </h4>
        <br></br>
        <h3>
            {post}
        </h3>
    </li>
  )
}

export default JournalEntry
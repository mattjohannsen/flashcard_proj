import React from 'react'

export default function StackFlashcardEdit({ card }) {
    return (
      <>
        <input 
          className="stack-edit__input" 
          type="text" 
          value={ card.word }
        />
        <input 
          className="stack-edit__input" 
          type="text" 
          value={ card.definition }
        />
        <button className="btn btn--danger">&times;</button>
      </>
    )
}

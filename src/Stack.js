import React from 'react'

export default function Stack( props ) {
    const {
        title
    } = props;
    
    return (
      <div>
        <div>
          <h3>{title}</h3>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div>
          <span>FlashCards:</span>
          <span>flashcards</span>
        </div>
      </div>
    )
}

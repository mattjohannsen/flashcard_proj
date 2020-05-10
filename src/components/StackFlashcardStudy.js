import React, { useState }  from 'react'

export default function StackFlashcardStudy(props) {
    const {
      card
    } = props;

    const [flip, setFlip] = useState(false)


    return (
        <div 
          className="card"
          onClick={() => setFlip(!flip)}
        >
        {/*           <div className="front">
            {flashcard.definition}
          </div>
          <div className="back">
            {flashcard.word}
          </div>     */}      
          {flip ? card.word : card.definition}
        </div>
    )
}

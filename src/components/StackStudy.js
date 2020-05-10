import React, { useContext } from 'react';
import StackFlashcardStudy from './StackFlashcardStudy';
import { StackContext } from './App';

export default function StackStudy({ stack }) {
    const { handleStackSelect } = useContext(StackContext);

    return (
      <div className="stack-study">
        <div className="stack-study__remove-button-container">
          <button 
            className="btn stack-study__remove-button"
            onClick={()=> handleStackSelect(undefined)}
          >
            &times;
          </button>
        </div>
        <div className="stack-study__label">
            {stack.title} - No. of cards: {stack.cards.length}
        </div>
        <br />
        <div>
          {stack.cards.map(card => (
          <StackFlashcardStudy
            key={card.id}
            card={card}
          />
        ))}
        </div>
      </div>        
    )
}

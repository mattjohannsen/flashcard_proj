import React from 'react';
import FlashcardList from './FlashcardList';

export default function Stack( props ) {
    const {
        title,
        cards
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
          <span>Flashcards</span>
          <div>
            <FlashcardList flashcards={cards}/>
          </div>
        </div>
      </div>
    )
}

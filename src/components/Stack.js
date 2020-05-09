import React from 'react';
import FlashcardList from './FlashcardList';

export default function Stack( props ) {
    const {
      id,  
      title,
      cards,
      handleStackDelete
    } = props;

    return (
      <div className="stack">
        <div className="stack__header">
          <h3 className="stack__title">{title}</h3>
          <div>
            <button className="btn btn--primary mr-1">Edit</button>
            <button 
              className="btn btn--danger"
              onClick={()=> handleStackDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="stack__row">
          <span className="stack__label">Flashcards:</span>
          <div className="stack__value stack__value--indented">
            <FlashcardList flashcards={cards}/>
          </div>
        </div>
      </div>
    )
}

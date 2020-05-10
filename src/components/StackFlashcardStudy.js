import React from 'react'

export default function StackFlashcardStudy(props) {
    const {
      card, 
      handleFlashCardChange,
      handleFlashcardDelete
    } = props;

    function handleChange(changes) {
      handleFlashCardChange(card.id, { ...card, ...changes })
    }
    return (
      <>
        <input 
          className="stack-edit__input" 
          type="text" 
          onChange={(e) => handleChange({ word: e.target.value })}
          value={ card.word }
        />
        <input 
          className="stack-edit__input" 
          type="text" 
          onChange={(e) => handleChange({ definition: e.target.value })}
          value={ card.definition }
        />
        <button 
          className="btn btn--danger"
          onClick={() => handleFlashcardDelete(card.id)}
        >
          &times;
        </button>
      </>
    )
}

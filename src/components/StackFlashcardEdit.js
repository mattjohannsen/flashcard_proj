import React from 'react'

export default function StackFlashcardEdit(props) {
    const {
      card, 
      handleFlashCardChange
    } = props;

    function handleChange(changes) {
      handleFlashCardChange(card.id, { ...card, ...changes })
    }
    return (
      <>
        <input 
          className="stack-edit__input" 
          type="text" 
          onInput={(e) => handleChange({ word: e.target.value })}
          value={ card.word }
        />
        <input 
          className="stack-edit__input" 
          type="text" 
          onInput={(e) => handleChange({ definition: e.target.value })}
          value={ card.definition }
        />
        <button className="btn btn--danger">&times;</button>
      </>
    )
}

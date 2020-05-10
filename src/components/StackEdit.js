import React, { useContext } from 'react';
import StackFlashcardEdit from './StackFlashcardEdit';
import { StackContext } from './App';

export default function StackEdit({ stack }) {
    const { handleStackChange, handleStackSelect } = useContext(StackContext);

    function handleChange(changes) {
      handleStackChange(stack.id, { ...stack, ...changes })
    }

    function handleFlashCardChange(id, card) {
      const newFlashcards = [...stack.cards]
      const index = newFlashcards.findIndex(c => c.id === id)
      newFlashcards[index] = card
      handleChange({ cards: newFlashcards })
    }

    return (
      <div className="stack-edit">
        <div className="stack-edit__remove-button-container">
          <button 
            className="btn stack-edit__remove-button"
            onClick={()=> handleStackSelect(undefined)}
          >
            &times;
          </button>
        </div>
        <div className="stack-edit__details-grid">
          <label 
            htmlFor="title" 
            className="stack-edit__label"
          >
            Title
          </label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={stack.title}
            onInput={e => handleChange({ title: e.target.value })}
            className="stack-edit__input"
          />
        </div>
        <br />
        <label
            htmlFor="cards" 
            className="stack-edit__label"
        >
          Flashcards
        </label>
        <div className="stack-edit__flashcard-grid">
          <div>Word</div>
          <div>Definition</div>
          <div></div>
          {stack.cards.map(card => (
          <StackFlashcardEdit
            key={card.id}
            handleFlashCardChange={handleFlashCardChange}
            card={card}
          />
        ))}
        </div>
        <div className="stack-edit__add-flashcard-btn-container">
          <button className="btn btn--primary">Add Flashcard</button>
        </div>
      </div>        
    )
}

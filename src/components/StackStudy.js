import React, { useContext } from 'react';
import StackFlashcardEdit from './StackFlashcardStudy';
import { StackContext } from './App';
import {v4 as uuidv4} from 'uuid';

export default function StackStudy({ stack }) {
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

    function handleFlashcardAdd() {
      const newFlashcard = {
        id: uuidv4(),
        word: '',
        definition: ''
      }
      handleChange({ cards: [ ...stack.cards, newFlashcard ]})
    }

    function handleFlashcardDelete(id) {
      handleChange({
        cards : stack.cards.filter(c => c.id !== id)
      })
    }

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
        <div className="stack-study__details-grid">
          <label 
            htmlFor="title" 
            className="stack-study__label"
          >
            Title
          </label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={stack.title}
            onChange={e => handleChange({ title: e.target.value })}
            className="stack-study__input"
          />
        </div>
        <br />
        <label
            htmlFor="cards" 
            className="stack-study__label"
        >
          Flashcards
        </label>
        <div className="stack-study__flashcard-grid">
          <div>Word</div>
          <div>Definition</div>
          <div></div>
          {stack.cards.map(card => (
          <StackFlashcardEdit
            key={card.id}
            handleFlashCardChange={handleFlashCardChange}
            handleFlashcardDelete={handleFlashcardDelete}
            card={card}
          />
        ))}
        </div>
        <div className="stack-study__add-flashcard-btn-container">
          <button 
            className="btn btn--primary"
            onClick={()=> handleFlashcardAdd()}
          >
            Add Flashcard
          </button>
        </div>
      </div>        
    )
}

import React from 'react';
import StackFlashcardEdit from './StackFlashcardEdit';

export default function StackEdit({ stack }) {
    return (
      <div className="stack-edit">
        <div className="stack-edit__remove-button-container">
          <button className="btn stack-edit__remove-button">&times;</button>
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
          <StackFlashcardEdit />
          <StackFlashcardEdit />
        </div>
        <div className="stack-edit__add-flashcard-btn-container">
          <button className="btn btn--primary">Add Flashcard</button>
        </div>
      </div>        
    )
}

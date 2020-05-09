import React from 'react';
import StackFlashcardEdit from './StackFlashcardEdit';

export default function () {
    return (
      <div className="stack-edit">
        <div>
          <button>&times;</button>
        </div>
        <div>
          <label htmlFor="name">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <br />
        <label>Flashcards</label>
        <div>
          <div>Word</div>
          <div>Definition</div>
          <div></div>
          <StackFlashcardEdit />
          <StackFlashcardEdit />
        </div>
        <div>
          <button>Add Flashcard</button>
        </div>
      </div>        
    )
}

import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
    const flashcardElements = flashcards.map(flashcard => {
        return <Flashcard key={flashcard.id} {...flashcard} />
    })
    return (
        <div>
            {flashcardElements}
        </div>
    )
}

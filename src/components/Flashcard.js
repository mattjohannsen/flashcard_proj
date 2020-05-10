import React from 'react';

export default function Flashcard( { word, definition}) {
    return (
        <>
          <span>{word}</span>
          <span>{definition}</span>
          <br></br>
        </>
    )
}

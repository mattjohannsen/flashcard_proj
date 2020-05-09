import React, { useContext } from 'react';
import Stack from './Stack';
import { StackContext } from './App';

export default function StackList({ stacks }) {
  const { handleStackAdd } = useContext(StackContext)
    return (
        <div className="stack-list">
          <div>
            {stacks.map(stack => {
              return (
                <Stack key={stack.id} {...stack} />
              )
            })}
          </div>
          <div className="stack-list__add-stack-btn-container">
            <button 
              className="btn btn--primary"
              onClick={handleStackAdd}
            >
              Add Stack
            </button>
          </div>
        </div>
    )
}

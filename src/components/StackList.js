import React from 'react';
import Stack from './Stack';

export default function StackList({ stacks }) {
    return (
        <div className="stack-list">
          <div>
            {stacks.map(stack => {
              return (
                <Stack 
                  key={stack.id} 
                  {...stack}
                />
              )
            })}
          </div>
          <div className="stack-list__add-stack-btn-container">
            <button className="btn btn--primary">Add Stack</button>
          </div>
        </div>
    )
}

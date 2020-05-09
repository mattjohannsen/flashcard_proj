import React from 'react';
import Stack from './Stack';

export default function StackList(props) {
  const {
    stacks,
    handleStackAdd
  } = props;

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

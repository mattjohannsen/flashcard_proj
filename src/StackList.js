import React from 'react';
import Stack from './Stack';

export default function StackList({ stacks }) {
    return (
        <>
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
          <button>Add Stack</button>
        </>
    )
}

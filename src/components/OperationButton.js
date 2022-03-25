import React from 'react';

function OperationButton({operation, gridArea}) {

  return (
   <button style={{gridArea: gridArea}} onClick={() => console.log(operation)}>
      {operation}
   </button>
  )
}

export default OperationButton


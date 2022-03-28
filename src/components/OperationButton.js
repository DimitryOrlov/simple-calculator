import React from 'react';
import { ACTIONS } from '../App';

function OperationButton({operation, gridArea, dispatch}) {

  return (
   <button style={{gridArea: gridArea}} onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}>
      {operation}
   </button>
  )
}

export default OperationButton


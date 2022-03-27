import React from 'react';
import { ACTIONS } from '../App'

function DigitButton({digit, gridArea, dispatch}) {

  return (
   <button style={{gridArea: gridArea}} onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit} })}>
      {digit}
   </button>
  )
}

export default DigitButton


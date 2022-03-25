import React from 'react';

function DigitButton({digit, gridArea}) {

  return (
   <button style={{gridArea: gridArea}} onClick={() => console.log(digit)}>
      {digit}
   </button>
  )
}

export default DigitButton


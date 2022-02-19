import React from 'react'
import Button from '@atlaskit/button'
import styles from 'styled-components'

const ButtonStyled = styles(Button)`
margin-top:5px;
text-align:center;
`;

export default function Todo() {
  return (
    <Button shouldFitContainer>Item1</Button>
  )
}

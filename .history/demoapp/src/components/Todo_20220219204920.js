import React from 'react'
import Button from '@atlaskit/button'
import styles from 'styled-components'

const ButtonStyled = styled(Button)`
margin-top:5px;
text-align:left;
`;

export default function Todo() {
  return (
    <Button shouldFitContainer>Item1</Button>
  )
}

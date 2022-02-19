import React from 'react'
import Button from '@atlaskit/button'
import styles from 'styled-components'

const ButtonStyled = styles(Button)

export default function Todo() {
  return (
    <Button shouldFitContainer>Item1</Button>
  )
}

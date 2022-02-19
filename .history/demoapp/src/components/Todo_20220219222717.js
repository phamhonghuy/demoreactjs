import React from 'react'
import Button from '@atlaskit/button'
import styled from 'styled-components'
import checkIcon from '@atlaskit/icon/glyph/check'

const ButtonStyled = styled(Button)`
margin-top:5px;
text-align:left;
`;

export default function Todo({todo}) {
  return (
    <ButtonStyled shouldFitContainer iconAfter={
      <checkIcon primaryColor=''/>
    }>{todo.name}</ButtonStyled>
  )
}

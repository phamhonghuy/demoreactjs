import React from 'react'
import Button from '@atlaskit/button'
import styled from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'

const ButtonStyled = styled(Button)`
margin-top:5px;
text-align:left;

.check-icon{
  display:none

  &hover{
    background-color:#
  }
}
`;

export default function Todo({todo}) {
  return (
    <ButtonStyled shouldFitContainer iconAfter={
      <span className='check-icon'><CheckIcon primaryColor='#4fff4f'/></span>
    }>{todo.name}</ButtonStyled>
  )
}

import React from 'react';
import Button from '@atlaskit/button';
import styled, { css } from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
  ${(p) =>
    p.iscompleted &&
    css`
      text-decoration: line-through;
    `}
  &:hover {
    .check-icon {
      display: inline-block;
    }
    ${(p) =>
      p.iscompleted &&
      css`
        text-decoration: line-through;
      `}
  }
  .check-icon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 5px;
    }
  }
`;

export default function Pet({ pet, onCheckBtnClick }) {
  return (
    <ButtonStyled
      iscompleted={pet.isCompleted ? '1' : ''}
      shouldFitContainer
      iconAfter={
        <span className='check-icon' onClick={() => onCheckBtnClick(pet.id)}>
          <CheckIcon primaryColor='#4fff4f' />
        </span>
      }
    >
      {pet.name}
    </ButtonStyled>
  );
}

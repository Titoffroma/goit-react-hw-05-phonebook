import styled from 'styled-components';
import Button from '../Button/ButtonStyled';

const Label = styled.label`
  &:first-child {
    margin-right: 10px;
  }
`;

const FormButton = styled(Button)`
  margin-left: 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  &:hover {
    color: #212121;
  }
  &:focus {
    outline: none;
    border: 1px solid #212121;
  }
  &:active {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export { Label, FormButton };

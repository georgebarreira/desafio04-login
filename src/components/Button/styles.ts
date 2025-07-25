import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  &:disabled {
    background-color: #d1d1d1;
    color: #a1a1a1;
    border: 1px solid #81259d;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

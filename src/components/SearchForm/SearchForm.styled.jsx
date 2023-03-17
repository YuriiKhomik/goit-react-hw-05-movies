import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

export const StyledSearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: none
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #f5743d;
  }
`;

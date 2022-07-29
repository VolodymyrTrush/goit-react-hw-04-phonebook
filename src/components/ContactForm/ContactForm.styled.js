
import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Box = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${p => p.theme.space[3]}px;
`;

export const Input = styled(Field)`
  width: 500px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  
`;
export const InputName = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[2]}px;
  
`;

export const SubmitButton = styled.button`
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  justify-content: center;
  width: 140px;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  
`;

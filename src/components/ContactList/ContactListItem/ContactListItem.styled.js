
import styled from 'styled-components';
export const ContactsItem = styled.li`
  margin-left: 0;
  display: flex;
  width: auto;
  height: 40px;
  padding: ${p => p.theme.space[2]}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.white}; 
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  `;

export const Text = styled.p``;


  
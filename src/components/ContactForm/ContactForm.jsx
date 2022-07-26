import { useState } from "react";
import PropTypes from 'prop-types';
import {StyledForm, Input} from './ContactForm.styled';

export const ContactForm = ({onSubmit, contacts}) => {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');


    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        onSubmit({name, number});
        setName('');
        setNumber('');
    }

    return (
        <StyledForm onSubmit={handleSubmitForm}>
            <Input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
            <Input type="text" name="number" placeholder="Number" value={number} onChange={handleChange} />  
            <button type="submit">Add contact</button>
        </StyledForm>
    )   
    }
export default ContactForm;

    ContactForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
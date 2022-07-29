
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Box, Input, InputName, SubmitButton } from './ContactForm.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(3).max(8).required(),
});

export const ContactsReviewForm = ({ submitForm }) => {
  return (
    <Formik initialValues={{ name: '', number: '' }}
            onSubmit={submitForm}
            validationSchema={schema}>
      <Box>
        <InputName>
          Name
          <Input
            autoComplete="off"
            type="text"
            name="name" 
          />
        </InputName>
        <InputName>
          Phone
          <Input
            autoComplete="off"
            type="tel"
            name="number"
          />
        </InputName>
        <SubmitButton type="submit">Add contacts</SubmitButton>
      </Box>
    </Formik>
  );
};

ContactsReviewForm.propTypes = {
  submitForm: PropTypes.func,
};
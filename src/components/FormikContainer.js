import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option1', value: 'option1' },
    { key: 'Option2', value: 'option2' },
    { key: 'Option3', value: 'option3' },
  ];
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
  });
  const onSubmit = (values) => console.log('Form values', values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            label='Email'
            name='email'
            type='email'
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
            type='description'
          />
          <FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;

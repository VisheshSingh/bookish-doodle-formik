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
  const radioOptions = [
    { key: 'Option1', value: 'roption1' },
    { key: 'Option2', value: 'roption2' },
    { key: 'Option3', value: 'roption3' },
  ];

  const checkOptions = [
    { key: 'Option1', value: 'Coption1' },
    { key: 'Option2', value: 'Coption2' },
    { key: 'Option3', value: 'Coption3' },
  ];
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date().required('Required').nullable(),
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
          <FormikControl
            control='radio'
            label='Radio topic'
            name='radioOption'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            label='Checkbox topic'
            name='checkboxOption'
            options={checkOptions}
          />
          <FormikControl control='date' label='Pick a date' name='birthDate' />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const RegistrationForm = () => {
  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Phone', value: 'phonemoc' },
  ];

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'phonemoc',
      then: Yup.string().required('Required'),
    }),
  });

  const onSubmit = (values) => console.log('Form values: ', values);
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
            type='email'
            name='email'
            label='Email'
          />
          <FormikControl
            control='input'
            type='password'
            name='password'
            label='Password'
          />
          <FormikControl
            control='input'
            type='password'
            name='confirmPassword'
            label='Confirm Password'
          />
          <FormikControl
            control='radio'
            name='modeOfContact'
            label='Mode of Contact'
            options={options}
          />
          <FormikControl
            control='input'
            type='test'
            name='phone'
            label='Phone Number'
          />
          <button type='submit' disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;

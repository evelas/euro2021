import { Field, Form, Formik, FormikProps, FormikValues } from 'formik'
import React from 'react';
import { SearchFormik } from '../../types/types';

type PropsType = {
  submit: (values: FormikValues) => void;
  formikRef?: React.MutableRefObject<FormikProps<SearchFormik>>,
  width?: string
}

const SearchForm: React.FC<PropsType> = ({submit, formikRef = null, width}: PropsType) => {

  return (
    <>
      <Formik initialValues={{ search: '' }} onSubmit={submit} innerRef={formikRef} className="home__form">
        {() => (
            <Form className="search">
              <Field className="search__input" style={{width: width}} name="search" placeholder="Поиск" required />
              <input className="search__button" type="submit" value="" />
            </Form>
          )}
      </Formik>
    </>
  )
}

export default SearchForm

import { SearchFormik } from './../../types/types';
import { searchActions } from './../../redux/actions/search';
import React from 'react';
import * as queryString from 'query-string';
import { FormikProps } from 'formik'
import { History } from 'history';

// eslint-disable-next-line
export const searchLogic = (formikRef: React.MutableRefObject<FormikProps<SearchFormik>>, search: string, dispatch: React.Dispatch<any>) => {
  dispatch(searchActions.setSearchAnswer(null));
  const parsed = queryString.parse(search)
  if (parsed.search) {
    dispatch(searchActions.loadSearch(parsed.search));
    dispatch(searchActions.setSearchText(parsed.search))
    formikRef.current.values.search = parsed.search;
  }
}

// eslint-disable-next-line
export const searchSubmit = (values: SearchFormik, pageType: string, history: History, dispatch: React.Dispatch<any>) => {
  if(values.search.length === 0) {
    dispatch(searchActions.setSearchAnswer(null));
  } else {
    history.push({
      pathname: `/dashboard/${pageType}`,
      search: `?search=${values.search}`
    })
  }
}

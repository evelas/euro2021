import { Field, Formik, Form, FormikValues, FormikHelpers } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemsSearch from '../../components/profile/ItemsSearch';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { searchActions } from '../../redux/actions/search';
import { AppStateType } from '../../redux/reducers';
import Preloader from '../../components/common/Preloader';
import { useHistory, Redirect } from 'react-router';
import { authActions } from '../../redux/actions';
import * as queryString from 'query-string';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {search} = history.location;
  const formikRef = React.useRef(null);


  const { searchAnswer, notFound, isFetching } = useSelector((state: AppStateType) => state.search);
  const { isAuth } = useSelector((state: AppStateType) => state.auth);


  function submit (values: FormikValues, { setSubmitting }: FormikHelpers<FormikValues>) {
    if(values.search.length === 0) {
      dispatch(searchActions.setSearchAnswer(null));
      dispatch(searchActions.notFoundAny('Введите текст'));
    } else {
      history.push({
        pathname: '/dashboard/home',
        search: `?search=${values.search}`
      })
    }
    setSubmitting(false);
  }

  // проверка авторизации
  React.useEffect(() => {
    dispatch(authActions.loadUserData());
  }, []);

  // если изменился query search
  React.useEffect(() => {
    const parsed = queryString.parse(search)
    dispatch(searchActions.loadSearch(parsed.search));
    dispatch(searchActions.setSearchText(parsed.search))
    // eslint-disable-next-line
    formikRef.current!.values!.search = parsed.search;
  }, [search])


  if(!isAuth) {
    return <Redirect to="/dashboard/"/>
  }
  return (
    <>
      <Header />
      <main className="home">

        <h4 className="home__title">Поиск по системе</h4>
        <Formik initialValues={{ search: '' }} onSubmit={submit} innerRef={formikRef} className="home__form">
        {() => (
            <Form>
              <Field className="home__search" name="search" placeholder="Поиск" />
              <input className="home__button" type="submit" value="" />
            </Form>
          )}
        </Formik>

        <span className="home__col">ID</span>
        <span className="home__col">ФИО</span>
        <hr></hr>
        <div className="home__result">
          {
            searchAnswer ?
              (!isFetching ? searchAnswer.map((item) => <ItemsSearch key={item.id} {...item} />) : <Preloader/>)
                :
              (notFound ? (!isFetching ? <div className="home__notfound">{notFound}</div> : <Preloader/>) : null)
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home

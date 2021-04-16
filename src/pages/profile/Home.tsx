import { Field, Formik, Form, FormikValues, FormikHelpers } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemsSearch from '../../components/common/profile/ItemsSearch';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { searchActions } from '../../redux/actions/search';
import { AppStateType } from '../../redux/reducers';


const Home: React.FC = () => {

  const dispatch = useDispatch();


  const searchAnswer = useSelector((state: AppStateType) => state.search.searchAnswer);
  const notFound = useSelector((state: AppStateType) => state.search.notFound);

  const initialValues = { text: '' };

  async function submit (values: FormikValues, { setSubmitting }: FormikHelpers<FormikValues>) {
    dispatch(searchActions.loadSearch(values.search));
    setSubmitting(false);
  }
  return (
    <>
      <Header />
      <main className="home">
        <h4 className="home__title">Поиск по системе</h4>
        <Formik initialValues={initialValues} onSubmit={submit}  className="home__form">
        {() => (
            <Form>
              <Field className="home__search" name="search" placeholder="Поиск"/>
              <input className="home__button" type="submit" value=""/>

            </Form>
          )}

        </Formik>
        {/* <form className="home__form">
          <input className="home__search" type="text" name="search" placeholder="Фамилия" />
          <input className="home__search" type="text" name="search" placeholder="Имя" />
          <input className="home__search" type="text" name="search" placeholder="E-mail" />
          <input className="home__search" type="text" name="search" placeholder="Статус анкеты" />
          <input className="home__search" type="text" name="search" placeholder="Статус фото" />
          <input className="home__search home__search_id" type="number" name="search" placeholder="ID" />
        </form> */}
        <span className="home__col">ID</span>
        <span className="home__col">ФИО</span>
        <hr></hr>
        <div className="home__result">
        {searchAnswer &&
        searchAnswer.map((item) => <ItemsSearch key={item.id} {...item} />)}
        {notFound && (<div className="home__notfound">{notFound}</div>)}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home

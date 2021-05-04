import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemsSearch from '../../components/profile/ItemsSearch';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { AppStateType } from '../../redux/reducers';
import Preloader from '../../components/common/Preloader';
import { useHistory } from 'react-router';
import { authActions } from '../../redux/actions';
import ContainerMenu from '../../components/menu/ContainerMenu';
import SearchForm from '../../components/common/SearchForm';
import { SearchFormik } from '../../types/types';
import { searchLogic, searchSubmit } from '../../helpers/search/searchLogic';

const Home: React.FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const {search} = history.location;
  const formikRef = React.useRef(null);

  const { searchAnswer, notFound, isFetching } = useSelector((state: AppStateType) => state.search);

  // если изменился query search
  React.useEffect(() => {
    searchLogic(formikRef, search, dispatch)
  }, [search])

  const handleSubmit = (values: SearchFormik) => {
    searchSubmit(values, 'home', history, dispatch);
  }

  // проверка авторизации
  React.useEffect(() => {
    dispatch(authActions.loadUserData());
  }, []);

  return (
    <>
      <Header />
      <ContainerMenu />
      <main className="home">
        <h4 className="home__title">Поиск по системе</h4>
        <SearchForm submit={handleSubmit} formikRef={formikRef} />
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

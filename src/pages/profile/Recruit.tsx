import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import SearchForm from '../../components/common/SearchForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ContainerMenu from '../../components/menu/ContainerMenu'
import { AppStateType } from '../../redux/reducers'
import ItemsRecruit from '../../components/profile/ItemsRecruit'
import Preloader from '../../components/common/Preloader'
import { SearchFormik } from '../../types/types'
import { FormikProps } from 'formik'
import {searchLogic, searchSubmit} from '../../helpers/search/searchLogic'

const Recruit = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {search} = history.location;
  const formikRef = React.useRef<FormikProps<SearchFormik>>(null);

  const { searchAnswer, notFound, isFetching } = useSelector((state: AppStateType) => state.search);

  // если изменился query search
  React.useEffect(() => {
    searchLogic(formikRef, search, dispatch)
  }, [search])

  const hundleSubmit = (values: SearchFormik) => {
    searchSubmit(values, 'recruit', history, dispatch);
  }

  return (
    <>
      <Header/>
      <ContainerMenu />
      <div className="recruit">
        <div className="recruit__search">
          <SearchForm submit={hundleSubmit} formikRef={formikRef} width={'180px'}/>
        </div>
        <div className="recruit__result">
          <table className="table">
            <tr>
              <th className="table__header table_tiny">ID</th>
              <th className="table__header table_medium">ФИО</th>
              <th className="table__header table_medium">Дата рожд.</th>
              <th className="table__header table_medium">Телефон</th>
              <th className="table__header table_medium">Почта</th>
              <th className="table__header table_huge">Собес.</th>
              <th className="table__header table_medium">Скан анкеты</th>
              <th className="table__header table_huge">Результат</th>
            </tr>
            {
              searchAnswer ?
                (!isFetching ?
                  searchAnswer.map((item) => <ItemsRecruit key={item.id} {...item} />) :
                    <tr><td colSpan={8}><Preloader /></td></tr>) :
                (notFound ? (!isFetching ?
                  <tr className="page__notfound"><td className="page__notfoundTd" colSpan={8}>{notFound}</td></tr> :
                    <tr><td colSpan={8}><Preloader /></td></tr>) : null)
            }
          </table>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Recruit

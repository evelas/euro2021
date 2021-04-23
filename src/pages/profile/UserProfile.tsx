
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import Preloader from '../../components/common/Preloader';
import ContainerMenu from '../../components/menu/ContainerMenu';

import UserDataHeader from '../../components/profile/UserDataHeader';
import { authActions, userProfileActions } from '../../redux/actions';
import { AppStateType } from '../../redux/reducers';


const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: AppStateType) => state.auth);
  const {userData, isFetching, notFound} = useSelector((state: AppStateType) => state.userProfile);
  const history = useHistory();
  const { pathname } = history.location;

  React.useEffect(() => {
    const idLocation = pathname.split('user/')[1];
    dispatch(userProfileActions.loadOneUser(idLocation));
  }, [pathname])

  // проверка авторизации
  React.useEffect(() => {
    dispatch(authActions.loadUserData());
  }, []);

  if(!isAuth) {
    return <Redirect to="/dashboard/"/>
  }
  return (
    <>
      <ContainerMenu />
      <main className="profile">
          {
            userData ?
              (!isFetching ? <UserDataHeader {...userData}/> : <Preloader/>)
                :
              (notFound ? (!isFetching ? <div className="profile__notfound">{notFound}</div> : <Preloader/>) : null)
          }
      </main>
    </>
  )
}

export default UserProfile

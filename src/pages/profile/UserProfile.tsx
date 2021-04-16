import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { userProfileActions } from '../../redux/actions';
import { AppStateType } from '../../redux/reducers';
// import { UserProfileType } from '../../types/types';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  // const { isLoaded, userData } = useSelector(({ searchUser }) => searchUser);
  // const isLoaded = useSelector((state: AppStateType) => state.userProfile.isLoaded);
  const userData = useSelector((state: AppStateType) => state.userProfile.userData);
  const notFoundUser = useSelector((state: AppStateType) => state.userProfile.notFound);
  const history = useHistory();
  const { pathname } = history.location;
  React.useEffect(() => {
    console.log(history)
    const idLocation = pathname.split('user/')[1];
    console.log('search: ', idLocation)
    dispatch(userProfileActions.loadOneUser(idLocation));

  }, [pathname])

  // React.useEffect(() => {
  //   dispatch(userProfileActions.loadOneUser(userId));

  // }, [props.match.params.userId]);

  // const sendNewProfileData = (formData: UserProfileType) => {
  //   dispatch(userProfileActions.saveProfile(formData, idLocation));
  // };

 console.log('userData->', userData)

 console.log(notFoundUser)
  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  )
}

export default UserProfile

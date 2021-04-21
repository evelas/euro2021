import React from 'react'
import { UserProfileType } from '../../types/types'
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { userProfileActions } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const UserDataHeader: React.FC<UserProfileType> = React.memo((props: UserProfileType) => {
  const dispatch = useDispatch();

  async function submit (values: UserProfileType, { setSubmitting }: FormikHelpers<UserProfileType>) {
    console.log('component dispatch:', values)
    console.log(parseInt(props.userId))
    dispatch(userProfileActions.saveProfile(values, parseInt(props.userId)));
    setSubmitting(false);
  }


  return (
    <>
      <Formik onSubmit={submit} initialValues={props}>
          {() => (
              <Form>
                <div className="profile__header">
                  <h1 className="profile__title">Анкета № {props.userId}, Логин: {props.email}</h1>
                  <div className="profile__main">
                    <div className="profile__photo">
                      <a href={"/userimg/avatars/" + props.email + ".jpg"} target="_blank" rel="noreferrer">
                        <img src={"/userimg/avatars/" + props.email + ".jpg"}/>
                      </a>
                    </div>
                    <div className="profile__downloads">
                      <div className="profile__blocks">

                        <div className="profile__btns">
                          <span className="profile__text profile_mr15">Фотография:</span>
                          <div>
                            <a className="profile__button profile_mr15" href={"/userimg/avatars/" + props.email + ".jpg"} target="_blank" rel="noreferrer">
                              <span>Открыть</span>
                            </a>
                            <button className="profile__button profile_mr15">Загрузить</button>
                          </div>
                        </div>


                          <span className="profile__text profile_mr15">Статус фото:</span>
                          <Field className="profile__select profile_mr15" as="select" name="avatardecision">
                            <option value={props.avatardecision} selected>{props.avatardecision}</option>
                            <option value="Фотография проверяется">Фотография проверяется</option>
                            <option value="Фотография отклонена">Фотография отклонена</option>
                            <option value="Фотография проверена">Фотография проверена</option>
                          </Field>

                      </div>
                      <div className="profile__blocks">
                        {/* <Field name="citizen" type="text"/> */}
                        <div className="profile__btns">
                          <span className="profile__text profile_mr15">Статус анкеты:</span>
                          <Field className="profile__select profile_mr15" as="select" name="decision">
                            <option value={props.decision} selected>{props.decision}</option>
                            <option value="На рассмотрении">На рассмотрении</option>
                            <option value="Проверена">Проверена</option>

                            <option value="Необходимы изменения">Необходимы изменения</option>
                            <option value="Приглашен к собеседованию">Приглашен к собеседованию</option>
                            <option value="Собеседование пройдено">Собеседование пройдено</option>
                            <option value="Собеседование не пройдено">Собеседование не пройдено</option>

                            <option value="Приглашён к участию">Приглашён к участию</option>
                            <option value="Приглашен в резерв">Приглашен в резерв</option>
                            <option value="Отказано в участии">Отказано в участии</option>
                            <option value="Заблокирована">Заблокирована</option>
                          </Field>
                        </div>
                      </div>
                      <div className="profile__blocks">
                        <div className="profile__btns">
                          <span className="profile__text profile_mr15">Скан паспорта:</span>
                          <div>
                            <a className="profile__button profile_mr15" href={"/userimg/scanpassport/" + props.email + ".jpg"} target="_blank" rel="noreferrer">
                              <span>Открыть</span>
                            </a>
                            <button className="profile__button profile_mr15">Загрузить</button>
                          </div>
                        </div>
                        <div className="profile__btns">
                          <span className="profile__text profile_mr15">Скан Полиса:</span>
                          <div>
                            <a className="profile__button profile_mr15" href={"/userimg/scanmedicine/" + props.email + ".jpg"} target="_blank" rel="noreferrer">
                              <span>Открыть</span>
                            </a>
                            <span className="profile__button profile_mr15">Загрузить</span>
                          </div>
                        </div>
                      </div>
                      <div className="profile__blocks">
                        <div className="profile__btns">
                          <span className="profile__text profile_mr15">Скан анкеты:</span>
                          <div>
                            <a className="profile__button profile_mr15" href={"/userimg/scananket/" + props.email + ".jpg"} target="_blank" rel="noreferrer">
                              <span>Открыть</span>
                            </a>
                            <button className="profile__button profile_mr15">Загрузить</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile__content">
                  <h1 className="profile__title">Персональная информация</h1>
                  <div className="profile__fields">
                    <div className="profile__data">
                      <label>Имя</label>
                      <Field type="text" name="name" />
                    </div>
                    <div className="profile__data">
                      <label>Фамилия</label>
                      <Field type="text" name="lastname" />
                    </div>
                    <div className="profile__data">
                      <label>Отчество</label>
                      <Field type="text" name="middlename" />
                    </div>
                    <div className="profile__data">
                      <label>Гражданство</label>
                      <Field type="text" name="citizen" />
                    </div>
                    <div className="profile__data">
                      <label>День рождения</label>
                      <Field type="text" name="birthday" />
                    </div>
                    <div className="profile__data">
                      <label>Страна рождения</label>
                      <Field type="text" name="country" />
                    </div>
                    <div className="profile__data">
                      <label>Город</label>
                      <Field type="text" name="city" />
                    </div>
                    <div className="profile__data">
                      <label>Телефон</label>
                      <Field type="text" name="phone" />
                    </div>
                    <div className="profile__data">
                      <label>ВК</label>
                      <Field type="text" name="vk" />
                    </div>
                    <div className="profile__data">
                      <label>Инстаграм</label>
                      <Field type="text" name="inst" />
                    </div>
                    <div className="profile__data">
                      <label>Университет</label>
                      <Field type="text" name="university" />
                    </div>
                  </div>
                </div>
                <div className="profile__submit">
                  <button className="profile__button profile__button_green" type="submit">Обновить</button>
                </div>
              </Form>
          )}
      </Formik>
    </>
  )
})

export default UserDataHeader


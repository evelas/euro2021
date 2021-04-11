import React from 'react'
import Footer from '@components/Footer';
import Header from '@components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="home">
        <h4 className="home__title">Поиск по системе</h4>
        <form className="home__form">
          <input className="home__search" type="text" name="search" placeholder="Фамилия" />
          <input className="home__search" type="text" name="search" placeholder="Имя" />
          <input className="home__search" type="text" name="search" placeholder="E-mail" />
          <input className="home__search" type="text" name="search" placeholder="Статус анкеты" />
          <input className="home__search" type="text" name="search" placeholder="Статус фото" />
          <input className="home__search home__search_id" type="number" name="search" placeholder="ID" />
        </form>
        <span className="home__col">ID</span>
        <span className="home__col">ФИО</span>
        <hr></hr>
        <div className="home__result">
          <a className="home__link" href="#">
            <div className="home__id">
              <span>23</span>
            </div>
            <div className="home__name">
              <span>Шувалов Николай Николаевич</span>
            </div>
          </a>
          <a className="home__link" href="#">
            <div className="home__id">
              <span>40</span>
            </div>
            <div className="home__name">
              <span>Шувалов Николай Николаевич</span>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home

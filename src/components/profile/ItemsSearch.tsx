import React from 'react'
import { Link } from 'react-router-dom'
import { SearchFullNameType } from '../../types/types'


const ItemsSearch: React.FC<SearchFullNameType> = ({id, fullName}: SearchFullNameType) => {

  return (
    // <Link className="home__link" to="/dashboard/user/${id}">
    <Link className="home__link" to={'/dashboard/user/' + id}>
      <div className="home__id">
        <span>{id}</span>
      </div>
      <div className="home__name">
        <span>{fullName}</span>
      </div>
    </Link>
  )
}

export default ItemsSearch

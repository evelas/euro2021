import React from 'react'
import { SearchFullNameType } from '../../../types/types'


const ItemsSearch: React.FC<SearchFullNameType> = ({id, fullName}: SearchFullNameType) => {
  console.log(id, fullName)
  return (
    <a className="home__link" href="#">
      <div className="home__id">
        <span>{id}</span>
      </div>
      <div className="home__name">
        <span>{fullName}</span>
      </div>
    </a>
  )
}

export default ItemsSearch

import React from 'react'
import { SearchType } from '../../types/types'

const ItemsSearch: React.FC<SearchType> = ({id, fullName}: SearchType) => {

  return (
    <a className="home__link" href={'/dashboard/user/' + id} target="_blank" rel="noreferrer">
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

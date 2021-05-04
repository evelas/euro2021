import React from 'react'
import { SearchType } from '../../types/types'

const ItemsRecruit: React.FC<SearchType> = ({id, fullName, birthday, phone, email, calendar, result}: SearchType) => {
  return (
    <tr>
      <td className="table__main table_tiny">
        {id}
      </td>
      <td className="table__main table_medium">
        {fullName}
      </td>
      <td className="table__main table_medium">
        {birthday}
      </td>
      <td className="table__main table_medium">
        {phone}
      </td>
      <td className="table__main table_medium">
        {email}
      </td>
      <td className="table__main table_huge">
        <b>{calendar}</b>
      </td>
      <td className="table__main table_medium">
        <a className="table__button" href={"/userimg/scananket/" + email + ".jpg"} target="_blank" rel="noreferrer">Открыть</a>
      </td>
      <td className="table__main table_huge">
        {result}
      </td>
    </tr>
  )
}

export default ItemsRecruit

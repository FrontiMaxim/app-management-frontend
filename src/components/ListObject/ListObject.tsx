import React from 'react'
import { IPropsListObject } from './IListObject'
import { ItemListObject } from './ItemListObject/ItemListObject'
import { useObjects } from '../../hooks/useObjects'

export const ListObject = ({ isChange }: IPropsListObject) => {

  const { objects } = useObjects();

  return (
    <ul>
        {
          objects && objects.map(object => <ItemListObject 
                                key={object.id_object}
                                data={object}
                                isChange={isChange} 
                                />)
        }
    </ul>
  )
}

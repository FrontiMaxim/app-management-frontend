import React from 'react'
import { PropsListObject } from './ListObject.props'
import { ItemListObject } from './ItemListObject/ItemListObject'
import { useObjects } from '../../lib/hooks/useObjects';

export const ListObject = ({ isChange }: PropsListObject) => {

  const { objects } = useObjects();

  return (
    <ul>
        {
          objects?.map(object => <ItemListObject 
                          key={object.id_object}
                          data={object}
                          isChange={isChange} 
                        />)
        }
    </ul>
  )
}

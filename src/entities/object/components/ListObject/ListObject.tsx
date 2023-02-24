import React from 'react'
import { PropsListObject } from './ListObject.props'
import { ItemListObject } from './ItemListObject/ItemListObject'
import { useObjects } from '../../lib/hooks/useObjects';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../shared';
import styles from './ListObject.module.scss';

export const ListObject = ({ isChange }: PropsListObject) => {

  const { objects } = useObjects();
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
        {
          objects?.map(object => 
                        <div key={object.id_object} className={styles.container_item}>
                          <ItemListObject 
                            data={object}
                            isChange={isChange} 
                          />

                          <Button
                            mode='primary'
                            className={styles.btn}
                            onClick={() => navigate(
                              '/cabinet/tasks',
                              {
                                state: {
                                  currentObject: object
                                }
                              }
                            )}
                          >
                            Открыть задачи
                          </Button>
                        </div>)            
        }
    </ul>
  )
}

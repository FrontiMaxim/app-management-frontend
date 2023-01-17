import React from 'react'
import { Button } from '../../Button/Button';
import { CardObject } from '../../CardObject/CardObject';
import { IPropsItemListObject } from './IItemListObject';

export const ItemListObject = ({ isChange, data}: IPropsItemListObject) => {

    return (
        <li>
            <CardObject {...data} />
            {
                isChange &&
                <div>
                    <Button value='редактировать' />

                    <Button value='удалить' />
                </div>
            }
         </li>
    );
}

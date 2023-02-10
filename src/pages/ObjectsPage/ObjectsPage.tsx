import React from 'react'
import { ListObject } from '../../entities/object'
import { ObjectCreationPanel } from '../../widgets'

export const ObjectsPage = () => {
    return (
        <div>
            <ObjectCreationPanel />
            <ListObject isChange={true} />
        </div>
    )
}

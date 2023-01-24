import React from 'react';
import { TaskBoard, TaskCreationPanel } from '../../widgets';

export const Tasks = () => {

    return (
        <div>
            <TaskBoard id_object='e6e33d4b-0907-4e62-8095-6ebfc6b51688' />
            <TaskCreationPanel 
            
                currentObject={{
                    id_object: "e6e33d4b-0907-4e62-8095-6ebfc6b51688",
                    city: "fwef",
                    street: "fwf",
                    house: "fewf",
                    apartment: 10,
                    note: "wefwef",
                    data_start: "2023-01-19",
                    client: "fwef",
                    users: [
                        {
                            id_user: "10089d59-2920-4de5-b853-fe102a470501",
                            name: "Константин Коваленко ",
                            login: "kostia",
                            password: "$2a$10$jIs.Edv.YWkz/imfedXTpeg9qd8gwvPAn3U9kbiDOCsHldmrFo.ee",
                            is_online: false,
                            avatar: "/avatars/kostia.jpg",
                            role: "ADMIN"
                        },
                        {
                            id_user: "f88a6b32-9d48-4859-870a-c5775dce8d5f",
                            name: "Иван Иванов",
                            login: "ivan",
                            password: "$2a$10$U67hG6Rxx6cf5SUWtSbgV.s.7lCthUHlhfXlgHAi36btPfqzyYGRS",
                            is_online: false,
                            avatar: "/avatars/oleg.jpg",
                            role: "DESIGNER"
                        }
                    ]
                }}
		
            />
        </div>
    )
}

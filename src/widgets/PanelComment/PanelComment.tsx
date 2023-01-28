import React from 'react'
import { FormComment, ListComment } from '../../entities/comment'

export const PanelComment = () => {
  return (
    <div>
        <ListComment task={
            {
                "id_task": "8984aea0-b881-4ed2-8cf4-096ca1707b7e",
                "name": "дизайн кухни",
                "deadline": "20.01.2023",
                "description": "в 3DMax сделать дизайн кухни 20 кв.м",
                "status": {
                    "id_status": 3,
                    "name": "COMPLETE"
                },
                "user": {
                    "id_user": "cec5d6b7-fa7b-43c4-9c4a-6518e5718571",
                    "name": "Расторгуев Максим Игоревич",
                    "login": "maxim",
                    "password": "$2a$10$pgNVGN3eCJIEJjQXOXAMnupmfsY3sNPFvfZNs0Lx3BJ3BqFuKofAi",
                    "is_online": true,
                    "avatar": "maxim.jpg",
                    "role": "ADMIN"
                },
                "resources": [
                    {
                        "id_resource": "7333e74d-02c5-4782-a53e-d27244aee4d1",
                        "originalName": "Описание_проекта.docx",
                        "storageName": "1674741122010.docx",
                        "id_task": "8984aea0-b881-4ed2-8cf4-096ca1707b7e"
                    },
                    {
                        "id_resource": "741327b6-3d00-4c0b-9daf-cb7f1f9953ce",
                        "originalName": "023d81bed1aada861567d2e68b1cfdb8.jpg",
                        "storageName": "1674743602858.jpg",
                        "id_task": "8984aea0-b881-4ed2-8cf4-096ca1707b7e"
                    },
                    {
                        "id_resource": "d8f544d5-520c-4663-9bcd-08ea98364b88",
                        "originalName": "Гарфилд.png",
                        "storageName": "1674743626207.png",
                        "id_task": "8984aea0-b881-4ed2-8cf4-096ca1707b7e"
                    }
                ],
                "object": {
                    "id_object": "e6e33d4b-0907-4e62-8095-6ebfc6b51688",
                    "city": "Самара",
                    "street": "Революционная",
                    "house": "32А",
                    "apartment": 23,
                    "note": "Капитальный ремонт квартиры",
                    "data_start": "15.01.2023",
                    "client": "Даниил Анисимов"
                }
            }
          }
        />
        <FormComment 
            task={
                {
                    "id_task": "8984aea0-b881-4ed2-8cf4-096ca1707b7e",
                    "name": "дизайн кухни",
                    "deadline": "20.01.2023",
                    "description": "в 3DMax сделать дизайн кухни 20 кв.м",
                    "status": {
                        "id_status": 3,
                        "name": "COMPLETE"
                    },
                    "user": {
                        "id_user": "cec5d6b7-fa7b-43c4-9c4a-6518e5718571",
                        "name": "Расторгуев Максим Игоревич",
                        "login": "maxim",
                        "password": "$2a$10$pgNVGN3eCJIEJjQXOXAMnupmfsY3sNPFvfZNs0Lx3BJ3BqFuKofAi",
                        "is_online": true,
                        "avatar": "maxim.jpg",
                        "role": "ADMIN"
                    },
                    "resources": [
                        {
                            "id_resource": "7333e74d-02c5-4782-a53e-d27244aee4d1",
                            "originalName": "Описание_проекта.docx",
                            "storageName": "1674741122010.docx",
                            "id_task": "8984aea0-b881-4ed2-8cf4-096ca1707b7e"
                        },
                        {
                            "id_resource": "741327b6-3d00-4c0b-9daf-cb7f1f9953ce",
                            "originalName": "023d81bed1aada861567d2e68b1cfdb8.jpg",
                            "storageName": "1674743602858.jpg",
                            "id_task": "8984aea0-b881-4ed2-8cf4-096ca1707b7e"
                        },
                        {
                            "id_resource": "d8f544d5-520c-4663-9bcd-08ea98364b88",
                            "originalName": "Гарфилд.png",
                            "storageName": "1674743626207.png",
                            "id_task": "8984aea0-b881-4ed2-8cf4-096ca1707b7e"
                        }
                    ],
                    "object": {
                        "id_object": "e6e33d4b-0907-4e62-8095-6ebfc6b51688",
                        "city": "Самара",
                        "street": "Революционная",
                        "house": "32А",
                        "apartment": 23,
                        "note": "Капитальный ремонт квартиры",
                        "data_start": "15.01.2023",
                        "client": "Даниил Анисимов"
                    }
                }
            }

            user={
                {
                    id_user: "f88a6b32-9d48-4859-870a-c5775dce8d5f",
                    name: "Иван Иванов\t",
                    login: "ivan",
                    password: "",
                    is_online: true,
                    avatar: "oleg.jpg",
                    role: "DESIGNER"
                }
            }
          />
    </div>
  )
}

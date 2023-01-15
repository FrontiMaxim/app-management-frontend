import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/IUser';
import { IListUser } from '../interfaces/IListUser';

const initialState: IListUser = {
    listUser: [],
    countUser: 0,
    currentUser: {
        id_user: '',
        login: '',
        name: '',
        is_online: false,
        avatar: '',
        role: ''
    }
}

const listUserSlice = createSlice({
  name: 'listUser',
  initialState,
  reducers: {
    downloadListUser(state, action: PayloadAction<IUser[]>) {
        state.listUser = [...action.payload];

        state.countUser = state.listUser.length;
    },

    addUserInList(state, action: PayloadAction<IUser>) {
        state.listUser.push(action.payload);
        state.countUser++;
    },

    removeUserInList(state, action: PayloadAction<string>) {
        const filterListUser = state.listUser.filter(user => user.id_user !== action.payload);
        state.listUser = filterListUser;
        state.countUser--;

        state.currentUser = {
            id_user: '',
            login: '',
            name: '',
            is_online: false,
            avatar: '',
            role: ''
        }
    },

    changeUserInList(state, action: PayloadAction<IUser>) {

        const changedUser = action.payload;
       
        const changedListUser = state.listUser.map(user => {
            if(user.id_user === changedUser.id_user) {
                return changedUser;
            } 
            else {
                return user;
            }
        });

        state.listUser = changedListUser;

        state.currentUser = {
            id_user: '',
            login: '',
            name: '',
            is_online: false,
            avatar: '',
            role: ''
        }
    },

    setCurrentUserFromList(state, action: PayloadAction<IUser>) {
        state.currentUser = {
            ...action.payload
        };
    }
  },
});

export const { downloadListUser, addUserInList, removeUserInList, changeUserInList, setCurrentUserFromList } = listUserSlice.actions;

export default listUserSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../../common/types/auth'

const initialState: IAuthState = {
	user: {
		id: null,
		firstName: '',
		userName: '',
		email: '',
		createdAt: 'string',
		updateAt: 'string',
		watchList: [
			{
				id: null,
				name: '',
				assetId: '',
				createdAt: '',
				updateAt: 'string',
				user: null,
			},
		],
	},
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			state.user = action.payload
			state.isAuth = true
		},
	},
})

export const { login } = authSlice.actions
export default authSlice.reducer

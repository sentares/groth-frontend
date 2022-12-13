export interface IPropsLogin {
	setEmail: (value: string) => void
	setPassword: (value: string) => void
}

export interface IPropsRegister {
	setEmail: (value: string) => void
	setPassword: (value: string) => void
	setFirstName: (value: string) => void
	setUsername: (value: string) => void
	setRepeatPassword: (value: string) => void
}

export interface IAuthState {
	user: IPublicUser
	isAuth: boolean
}

interface IPublicUser {
	id: number | null
	firstName: string
	userName: string
	email: string
	createdAt: string
	updateAt: string
	watchList: [IWatchList]
}

interface IWatchList {
	id: number | null
	name: string
	assetId: string
	createdAt: string
	updateAt: string
	user: number | null
}

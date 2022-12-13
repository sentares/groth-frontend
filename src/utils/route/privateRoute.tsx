import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'

export const PrivateRoute = () => {
	const t = true
	const isAuth = useAuth()

	return t ? <Outlet /> : <Navigate to='/login' />
}

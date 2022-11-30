import { useLocation } from 'react-router-dom'
import { LoginPage } from './login'
import { RegisterPage } from './register'

export const AuthRootComponent = () => {
	const location = useLocation()
	return location.pathname === '/register' ? (
		<RegisterPage />
	) : location.pathname === '/login' ? (
		<LoginPage />
	) : null
}

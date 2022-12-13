import { Box } from '@mui/material'
import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginPage } from './login'
import { RegisterPage } from './register'
import style from './style.module.scss'
import { toast } from 'react-toastify'
import { instance } from '../../utils/axios'
import { useAppDispatch } from '../../utils/hooks'
import { login } from '../../redux/slice/auth'
import { AppErrors } from '../../common/errors'

export const AuthRootComponent: FC = (): JSX.Element => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [username, setUsername] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()

		if (location.pathname === '/login') {
			if (email !== '' && password !== '') {
				try {
					const userData = {
						email,
						password,
					}
					const user = await instance.post('auth/login', userData)
					await dispatch(login(user.data))
					toast(`Welcome, ${user.data.user.firstName}`)
					navigate('/')
				} catch (error) {
					toast.error('Неудалось 🥺')
					throw new Error(AppErrors.PasswordDoNotMatch)
				}
			} else {
				toast.error('Введите адрес электронной почты и пароль.')
			}
		} else {
			if (repeatPassword !== password) return
			try {
				const userData = {
					firstName,
					username,
					email,
					password,
				}
				const newUser = await instance.post('auth/register', userData)
				await dispatch(login(newUser.data))
				toast(`Welcome, ${newUser.data.user.firstName}`)
				navigate('/')
			} catch (error) {
				toast.error('Неудалось 🥺')
				return error
			}
		}
	}

	return (
		<div className={style.root}>
			<form onSubmit={handleSubmit}>
				<Box
					width={600}
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					boxShadow='5px 5px 10px #ccc'
					borderRadius={3}
					padding={5}
				>
					{location.pathname === '/register' ? (
						<RegisterPage
							setEmail={setEmail}
							setPassword={setPassword}
							setFirstName={setFirstName}
							setUsername={setUsername}
							setRepeatPassword={setRepeatPassword}
						/>
					) : location.pathname === '/login' ? (
						<LoginPage setEmail={setEmail} setPassword={setPassword} />
					) : null}
				</Box>
			</form>
		</div>
	)
}

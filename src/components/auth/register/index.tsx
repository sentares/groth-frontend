import { Button, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IPropsRegister } from '../../../common/types/auth'

export const RegisterPage: FC<IPropsRegister> = (
	props: IPropsRegister
): JSX.Element => {
	const {
		setEmail,
		setPassword,
		setFirstName,
		setUsername,
		setRepeatPassword,
	} = props

	return (
		<div>
			<Typography
				fontFamily='Open Sans'
				textAlign='center'
				variant='h4'
				component='h2'
				sx={{
					color: '#2B2B2B',
					fontWeight: 700,
					fontSize: '24px',
					margin: '20px 0 32px 0',
				}}
			>
				Создайте свой профиль
			</Typography>
			<TextField
				onChange={e => setUsername(e.target.value)}
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Псевдоним'
				variant='outlined'
				type='text'
			/>
			<TextField
				onChange={e => setFirstName(e.target.value)}
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Имя'
				variant='outlined'
				type='text'
			/>
			<TextField
				onChange={e => setEmail(e.target.value)}
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Email'
				variant='outlined'
				type='email'
			/>
			<TextField
				onChange={e => setPassword(e.target.value)}
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Пароль'
				variant='outlined'
				type='password'
			/>
			<TextField
				onChange={e => setRepeatPassword(e.target.value)}
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Повторите Пароль'
				variant='outlined'
				type='password'
			/>
			<Typography
				fontFamily='Open Sans'
				variant='body2'
				fontSize='12px'
				color='#909090'
			>
				Нажимая Создать Аккаунт ниже, Вы даете согласие на наши Условия
				использования и Заявление о конфиденциальности
			</Typography>
			<Button
				sx={{
					marginTop: '44px',
					marginBottom: '15px',
					background: '#000',
					fontFamily: 'Open Sans',
				}}
				type='submit'
				fullWidth={true}
				variant='contained'
			>
				Зарегистрироваться
			</Button>
			<Typography
				fontFamily='Open Sans'
				textAlign='center'
				variant='body2'
				component='h2'
				color='#909090'
			>
				У вас уже есть аккаунт?
				<Link style={{ marginLeft: '5px' }} to='/login'>
					Войти
				</Link>
			</Typography>
		</div>
	)
}

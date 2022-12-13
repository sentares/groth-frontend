import { Button, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IPropsLogin } from '../../../common/types/auth'

export const LoginPage: FC<IPropsLogin> = ({
	setEmail,
	setPassword,
}: IPropsLogin): JSX.Element => {
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
				Войдите в свой профиль
			</Typography>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Email'
				variant='outlined'
				onChange={e => setEmail(e.target.value)}
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Пароль'
				variant='outlined'
				type='password'
				onChange={e => setPassword(e.target.value)}
			/>
			<Button
				sx={{ marginTop: '44px', marginBottom: '15px', background: '#000' }}
				fullWidth={true}
				variant='contained'
				type='submit'
			>
				Войти
			</Button>
			<Typography
				fontFamily='Open Sans'
				textAlign='center'
				variant='body2'
				component='h2'
				color='#909090'
			>
				Еще не зарегистрированы ?
				<Link style={{ marginLeft: '5px' }} to='/register'>
					Создать Аккаунт
				</Link>
			</Typography>
		</div>
	)
}

import { Box } from '@mui/material'
import { NotFoundContent } from './not-found-content'
import style from './style.module.scss'

export const NotFoundRootComponent = () => {
	return (
		<div className={style.root}>
			<Box
				display='flex'
				justifyContent='center'
				align-items='center'
				flexDirection='column'
			>
				<NotFoundContent text='Страница не найдена' />
			</Box>
		</div>
	)
}

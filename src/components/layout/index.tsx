import { Box } from '@mui/material'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { IPropsLayout } from '../../common/types/layout'
import { SideBar } from '../side-bar'
import { TopBarComponent } from '../top-bar'

export const LayoutComponent: FC<IPropsLayout> = (
	props: IPropsLayout
): JSX.Element => {
	const { children } = props
	const { pathname } = useLocation()
	return (
		<Box>
			{pathname === '/register' || pathname === '/login' ? (
				<Box>{children}</Box>
			) : (
				<Box>
					<TopBarComponent />
					{children}
				</Box>
			)}
		</Box>
	)
}

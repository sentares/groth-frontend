import { Box } from '@mui/material'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IPropsLayout } from '../../common/types/layout'
import { TopBarComponent } from '../top-bar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useStyles } from './styles'
import { SideBarComponent } from '../side-bar'

export const LayoutComponent: FC<IPropsLayout> = (
	props: IPropsLayout
): JSX.Element => {
	const { children } = props
	const location = useLocation()
	const classes = useStyles()
	const isNoneMobile = useMediaQuery('(min-width:600px)')
	const [isOpen, setIsOpen] = useState(true)

	return location.pathname === '/register' || location.pathname === '/login' ? (
		<>{children}</>
	) : (
		<>
			<Box display={isNoneMobile ? 'flex' : 'block'} width='100%' height='100%'>
				<SideBarComponent
					isNoneMobile={isNoneMobile}
					drawerWidth='230px'
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
				<Box className={classes.mainSection}>
					<TopBarComponent />
					{children}
				</Box>
			</Box>
		</>
	)
}

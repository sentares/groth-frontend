import { FC, useEffect, useState } from 'react'
import {
	Box,
	Drawer,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	ListItemIcon,
	Typography,
	useTheme,
} from '@mui/material'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStyles } from './styles'
import { FlexBetween } from '../flex-between'
import { navMenu } from '../../common/moks/navigate'

export const SideBarComponent: FC<any> = (props: any): JSX.Element => {
	const { isNoneMobile, drawerWidth, isOpen, setIsOpen } = props
	const [active, setActive] = useState('')
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const classes = useStyles()
	const theme = useTheme()

	useEffect(() => {
		setActive(pathname.substring(1))
	}, [pathname])

	return (
		<>
			<Box component='nav'>
				{isOpen && (
					<Drawer
						open={isOpen}
						onClose={() => setIsOpen(false)}
						anchor='left'
						variant='persistent'
						sx={{
							width: drawerWidth,
							'& .MuiDrawer-paper': {
								color: '#7C7C7C',
								backgroundColor: '#232323',
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}
					>
						<Box width='100%'>
							{/* Logo */}
							<Box>
								<FlexBetween>
									<Box display='flex' alignItems='center' gap='10px'>
										<Typography>Groth</Typography>
									</Box>

									{isNoneMobile && (
										<IconButton onClick={() => setIsOpen(!isOpen)}>
											<ChevronLeftOutlinedIcon />
										</IconButton>
									)}
								</FlexBetween>
							</Box>
							{/* Link List */}
							<List>
								{navMenu.map(element => (
									<ListItem key={element.id}>
										<ListItemButton onClick={() => navigate(`${element.path}`)}>
											<ListItemIcon>{element.icon}</ListItemIcon>
											<ListItemText>
												<Typography>{element.name}</Typography>
											</ListItemText>
										</ListItemButton>
									</ListItem>
								))}
							</List>
							{/* SingIn */}
						</Box>
					</Drawer>
				)}
			</Box>
		</>
	)
}

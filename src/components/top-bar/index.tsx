import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material'
import { FC, useContext } from 'react'
import { useAppSelector } from '../../utils/hooks'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { ColorModeContext, tokens, useMode } from '../../theme'

export const TopBarComponent: FC = (): JSX.Element => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const colorMode: any = useContext(ColorModeContext)
	console.log(colors)

	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			px='32px'
			py='24px'
		>
			<Box>
				<Grid>Welcome, John</Grid>
			</Box>
			<Box display='flex'>
				<Grid sx={{ pr: '28px', borderRight: '1px solid #D1D1D1' }}>
					<IconButton onClick={colorMode.toggleColorMode} sx={{ mr: '29px' }}>
						{theme.palette.mode === 'dark' ? (
							<DarkModeIcon />
						) : (
							<LightModeIcon />
						)}
					</IconButton>
					<IconButton>
						<NotificationsNoneOutlinedIcon />
					</IconButton>
				</Grid>
				<Grid
					sx={{
						width: '390px',
						display: 'flex',
						backgroundColor: 'transparent',
						borderRadius: '8px',
						ml: '28px',
						px: '14px',
						pl: '0px',
						py: '8px',
					}}
				>
					<IconButton>
						<SearchIcon />
					</IconButton>
					<InputBase sx={{}} placeholder='Поиск' />
				</Grid>
			</Box>
		</Box>
	)
}

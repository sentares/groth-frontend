import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material'
import { FC, useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'
import { ColorModeContext, tokens, useMode } from '../../theme'

export const TopBarComponent: FC = (): JSX.Element => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const colorMode: any = useContext(ColorModeContext)

	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			px='32px'
			py='24px'
		>
			<Grid>Welcome Alex</Grid>
			<Box display='flex' alignItems='center'>
				<Grid
					onClick={colorMode.toggleColorMode}
					sx={{ pr: '25px', borderRight: `1px solid ${colors.gray.DEFAULT}` }}
				>
					<IconButton sx={{ mr: '10px' }}>
						{theme.palette.mode === 'dark' ? (
							<DarkModeIcon />
						) : (
							<LightModeIcon />
						)}
					</IconButton>
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
				</Grid>
				<Grid
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: `${colors.gray.DEFAULT}`,
						borderRadius: '8px',
						ml: '10px',
						height: '20px',
						py: '20px',
					}}
				>
					<IconButton>
						<SearchIcon />
					</IconButton>
					<InputBase
						sx={{ px: '10px', py: '12px', width: '320px' }}
						placeholder='Поиск'
					/>
				</Grid>
			</Box>
		</Box>
	)
}

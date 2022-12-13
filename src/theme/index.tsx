import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material'

export const tokens = (mode: string) => ({
	...(mode === 'dark'
		? {
				primary: {
					DEFAULT: '#000000',
					100: '#000000',
					500: '#0F0E0E',
					600: '#232323',
					700: '#3D3D3D',
					800: '#525252',
					900: '#5C5C5C',
				},
				secondary: {
					DEFAULT: '#7C7C7C',
				},
				black: {
					DEFAULT: '#000000',
					100: '#000000',
					500: '#0F0E0E',
					600: '#292929',
					700: '#3D3D3D',
					800: '#525252',
					900: '#5C5C5C',
				},
				white: {
					DEFAULT: '#FFFFFF',
					100: '#F7F7F7',
				},
				gray: {
					DEFAULT: '#3C3C3C',
				},
				accentMain: '#0F0E0E',
		  }
		: {
				white: {
					DEFAULT: '#FFFFFF',
					100: '#F7F7F7',
					200: '#D1D1D1',
				},
				primary: {
					DEFAULT: '#FFFFFF',
					500: '#F7F7F7',
				},
				secondary: {
					DEFAULT: '#7C7C7C',
				},
				black: {
					DEFAULT: '#000000',
					100: '#525252',
					200: '#3D3D3D',
					300: '#292929',
					400: '#141414',
					900: '#000000',
				},
				gray: {
					DEFAULT: '#3C3C3C',
				},
				accentMain: '#F7F7F7',
		  }),
})

export const themeSettings: any = (mode: string) => {
	const colors = tokens(mode)
	return {
		palette: {
			mode: mode,
			...(mode === 'dark'
				? {
						primary: {
							main: colors.primary.DEFAULT,
						},
						secondary: {
							main: colors.secondary.DEFAULT,
						},
						neutral: {
							dark: colors.black[500],
							light: colors.white[100],
						},
				  }
				: {
						primary: {
							main: colors.primary.DEFAULT,
						},
						secondary: {
							main: colors.secondary.DEFAULT,
						},
						neutral: {
							dark: colors.black[500],
							light: colors.white[100],
						},
				  }),
		},
		typography: {
			fontFamily: ['Poppins', 'sans-serif'].join(','),
			fontSize: 14,
			h1: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 28,
				fontWEight: 700,
			},
			h2: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 20,
				fontWEight: 600,
			},
			h3: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 18,
				fontWEight: 700,
			},
			p: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 14,
				fontWEight: 500,
			},
		},
	}
}

export const ColorModeContext: any = createContext({
	toggleColorMode: () => {},
})

export const useMode = () => {
	const [mode, setMode] = useState('dark')
	console.log(mode)

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode(prev => (prev === 'light' ? 'dark' : 'light')),
		}),
		[]
	)

	const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode])

	return [theme, colorMode]
}

import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './components/auth/login'
import { RegisterPage } from './components/auth/register'
import { AuthRootComponent } from './components/auth'
import { HomePage } from './components/home'
import { PrivateRoute } from './utils/route/privateRoute'
import { NotFoundRootComponent } from './components/notFound'
import { ToastContainer } from 'react-toastify'
import { LayoutComponent } from './components/layout'
import { ColorModeContext, useMode } from './theme'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

const App = () => {
	const [theme, colorMode] = useMode()

	return (
		<>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<LayoutComponent>
						<div className='App'>
							<Routes>
								<Route path='/' element={<PrivateRoute />}>
									<Route path='/' element={<HomePage />} />
								</Route>
								<Route path='/register' element={<AuthRootComponent />} />
								<Route path='/login' element={<AuthRootComponent />} />
								<Route path='*' element={<NotFoundRootComponent />} />
							</Routes>
							<ToastContainer />
						</div>
					</LayoutComponent>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</>
	)
}

export default App

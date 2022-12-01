import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './components/auth/login'
import { RegisterPage } from './components/auth/register'
import { AuthRootComponent } from './components/auth'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/register' element={<AuthRootComponent />} />
				<Route path='/login' element={<AuthRootComponent />} />
			</Routes>
		</div>
	)
}

export default App

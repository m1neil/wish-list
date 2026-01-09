import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './app/router'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './app/store'
import '@/styles/style.scss'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</StrictMode>
)

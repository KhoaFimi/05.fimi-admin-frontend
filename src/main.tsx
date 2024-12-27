import '@/styles/index.css'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { routeTree } from '@/routeTree.gen'

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
	console.log(message)
})

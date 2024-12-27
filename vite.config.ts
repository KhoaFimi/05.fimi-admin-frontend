import path from 'node:path'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron/simple'

export default defineConfig({
	plugins: [
		react(),
		electron({
			main: {
				entry: 'electron/main.ts'
			},
			preload: {
				input: path.join(__dirname, 'electron/preload.ts')
			},
			renderer: process.env.NODE_ENV === 'test' ? undefined : {}
		}),
		TanStackRouterVite()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})

import { injectGlobal } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

injectGlobal`
	html {
		height: 100%;
		font-size: 16px !important;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		height: 100%;
		font-size: 16px !important;
	}

	#root {
		height: 100%;
	}
`

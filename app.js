import express from 'express'
import { allmenu, filterMenu } from './utils/controller.js'
import expressLayouts from 'express-ejs-layouts'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressLayouts)

app.get('/', (req, res) => {
	const allMenu = allmenu

	res.render('allmenu', {
		layout: 'layouts/main-layouts',
		title: 'PAGO Hut',
		allMenu
	})
})

app.get('/pizza', (req, res) => {
	const menu = filterMenu('pizza')

	res.render('menu', {
		layout: 'layouts/main-layouts',
		title: 'Pizza Menu',
		menu
	})
})

app.get('/pasta', (req, res) => {
	const menu = filterMenu('pasta')

	res.render('menu', {
		layout: 'layouts/main-layouts',
		title: 'Pasta Menu',
		menu
	})
})

app.get('/rice', (req, res) => {
	const menu = filterMenu('nasi')

	res.render('menu', {
		layout: 'layouts/main-layouts',
		title: 'Rice Menu',
		menu
	})
})

app.get('/drink', (req, res) => {
	const menu = filterMenu('minuman')

	res.render('menu', {
		layout: 'layouts/main-layouts',
		title: 'Drinks Menu',
		menu
	})
})

app.listen(PORT, () => console.log(`Server started at http:localhost:${PORT}`))

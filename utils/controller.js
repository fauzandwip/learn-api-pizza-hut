import fs from 'fs'

const loadMenu = () => {
	const file = fs.readFileSync('data/pizza.json', 'utf-8')
	return JSON.parse(file)
}

let fileAPI = loadMenu()
let allmenu = fileAPI['menu']

const filterMenu = (name) => {
	return allmenu.filter((menu) => menu['kategori'] === name)
}

export { loadMenu, filterMenu, allmenu }

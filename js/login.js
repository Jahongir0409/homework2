let form = document.querySelector('form')
let passwordInput = document.querySelector('#passwordInput')
let usernameInput = document.querySelector('#usernameInput')
let locAddress = window.location.href.split('/')

let status = window.localStorage.getItem('status')
if(status) window.location = locAddress.slice(0, locAddress.length - 1 ).join('/') + '/index.html'

form.onsubmit = (event) => {
	event.preventDefault()
	let username = usernameInput.value.trim().toLowerCase()
	let password =  passwordInput.value.trim().toLowerCase()
	let found = users.find( (user) => user.username == username && user.password == password)
	try {
		if (found) {
			window.localStorage.setItem('status', true)
			window.location = locAddress.slice(0, locAddress.length - 1 ).join('/') + '/index.html'
		} else{
			throw new Error('User not found')
		}
	} catch (error) {
		window.alert(error.message + " Please sign up !")
	}
}
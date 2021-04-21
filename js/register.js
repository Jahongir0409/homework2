let formR = document.querySelector('#register')
let ageInput = document.querySelector('#ageInput')
let passwordInput = document.querySelector('#passwordInput')
let usernameInput = document.querySelector('#usernameInput')
let locAddress = window.location.href.split('/')

let status = window.localStorage.getItem('status')
if(status) window.location = locAddress.slice(0, locAddress.length - 1 ).join('/') + '/index.html'

formR.onsubmit = (event) => {
	event.preventDefault()
	let username = usernameInput.value.trim().toLowerCase()
	let password =  passwordInput.value.trim().toLowerCase()
	let age =  ageInput.value.trim().toLowerCase()
	let found = users.find( (user) => user.username == username && user.password == password)
	try {
		if (found) {
			throw new Error('the user has already exists')
		} else {
			users.push({username, password,age	})
			window.localStorage.setItem('users', JSON.stringify(users))
			window.localStorage.setItem('status', true)
			window.location = locAddress.slice(0, locAddress.length - 1 ).join('/') + '/index.html'
		}
		usernameInput.value = null
		passwordInput.value = null
		ageInput.value = null

	} catch(error){
		window.alert(error.message + " Please log in to your account")
	}
}
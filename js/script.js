const btn = document.querySelector('#btn')
let locAddress = window.location.href.split('/')

let status = window.localStorage.getItem('status')
if(!status) window.location = locAddress.slice(0, locAddress.length - 1 ).join('/') + '/login.html'

btn.onclick = () => {
	window.localStorage.setItem('status', '')
	window.location =  locAddress.slice(0, locAddress.length - 1 ).join('/') + '/login.html'

}
let timer =  document.querySelector('.timer')
let red = document.querySelector('.light-red')
let yellow = document.querySelector('.light-yellow')
let green = document.querySelector('.light-green')
	setInterval( () => {
		let date = new Date()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()
		timer.textContent = hours + ":" + minutes + ":" + seconds
	}, 0)
setInterval ( () => {
	setTimeout( () => {
		red.classList.add('flash-red')
		red.textContent = 'Wait !'
	},0)
	setTimeout( () => {
		red.classList.remove('flash-red')
		red.textContent = ''
	},1000)
	setTimeout( () => {
		yellow.classList.add('flash-yellow')
		yellow.textContent = 'Ready ?'
	},1000)
	setTimeout( () => {
		yellow.classList.remove('flash-yellow')
		yellow.textContent = ''
	},1500)
	setTimeout( () => {
		green.classList.add('flash-green')
		green.textContent = 'Go !'
	},1500)
	setTimeout( () => {
		green.classList.remove('flash-green')
		green.textContent = ''
	},2500)
},2500)

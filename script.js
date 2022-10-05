let PSADate = document.querySelector('.PSADate').value
let displayDate = document.querySelector('.date')

function calculateDates(date) {
    PSADate = date
    displayDate.textContent = `${PSADate}`
}
let PSADate = document.querySelector('.PSADate').value
let displayDate = document.querySelector('.date')
let newDate = new Date()

Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
}

function calculateDates(date) {
    PSADate = date
    newDate = newDate.addDays(4)
    displayDate.textContent = `${newDate.toISOString().split('T')[0]}`
}


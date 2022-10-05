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

let fields = [
'P2 L6 Date Letter from Lender', 'date',
'P2 L14 Buyer Agrees to Make a Complete Loan Application By', 'date',
'P3 L15 Date to Order Title', 'date',
'P4 L9 Inspection Date', 'date',
'P5 L2 Req for Repairs', 'date',
'P5 L5 Agreement on Repairs', 'date',
'P5 L14 Advance Funds by Date', 'date',
'P5 L15 Authorizes Lender to Order by Date', 'date',
'P5 L53 Recording Date', 'date',
'P5 L53 Recording Date', 'date',
'P9 L14 Expire Date', 'date'
]

let gridTest = document.querySelector('.grid-test')

// generate fields

function generateFields() {
    for (i=0;i<fields.length;i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add('grid-item')
        if (fields[i] == 'date') {
            //get unique identifier
            newDiv.textContent = `${fields[i-1].split(" ", 2).join("")}`
        } else {
            newDiv.textContent = `${fields[i]}`
        }
        gridTest.appendChild(newDiv)
    }
}

generateFields()

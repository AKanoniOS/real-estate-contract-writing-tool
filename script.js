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
'P2 L6 Date Letter from Lender', 'P2L6',
'P2 L14 Buyer Agrees to Make a Complete Loan Application By', 'P2L14',
'P3 L15 Date to Order Title', 'P3L15',
'P4 L9 Inspection Date', 'P4L9',
'P5 L2 Req for Repairs', 'P5L2',
'P5 L5 Agreement on Repairs', 'P5L5',
'P5 L14 Advance Funds by Date', 'P5L14',
'P5 L15 Authorizes Lender to Order by Date', 'P5L15',
'P5 L53 Recording Date', 'P5L53',
'P5 L53 Recording Date', 'P5L53',
'P9 L14 Expire Date', 'P9L14'
]

let dateKey = {
    'P2L6': 3,
    'P2L14': 3,
    'P3L15': 4,
    'P4L9': 14,
    'P5L2': 18,
    'P5L5': 21,
    'P5L14': 21,
    'P5L15': 21,
    'P5L53': 0,
    'P5L53': 0,
    'P9L14': 0,
} 

let gridTest = document.querySelector('.grid-test')

// generate fields

function generateFields() {
    for (i=0;i<fields.length;i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add('grid-item')
        if (fields[i] == 'date') {
            //get unique identifier
            function getID() {
                return fields[i-1].split(" ", 2).join("")
            }
            newDiv.textContent = `${fields[i-1].split(" ", 2).join("")}`
            newDiv.classList.add(`${fields[i-1].split(" ", 2).join("")}`)
            if dateKey.fields[]
        } else {
            newDiv.textContent = `${fields[i]}`
        }
        gridTest.appendChild(newDiv)
    }
}

generateFields()

const holidayBoxes = [ 
  {
    name: 'Valentines Day Box',
    price: '35.00',
  },
  {
    name: 'Fathers Day Box',
    price: '40.00'
  }  
]

function GetAllHolidayBoxes() {
  return holidayBoxes;
}

module.exports = {
  GetAllHolidayBoxes,
}
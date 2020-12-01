function createEmployeeRecord(arr){
    return{ 
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

function createEmployeeRecords(arrOfArrs){
 return arrOfArrs.map(function(info){
    return createEmployeeRecord(info)
  })
}

const TimeInEvent = (obj, date) => {

}
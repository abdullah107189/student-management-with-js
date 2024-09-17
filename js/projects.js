const studentsInfoArray = [];
const addStudentBtn = document.getElementById('addStudentBtn')
addStudentBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('input-name')
    const inputMarks = document.getElementById('input-marks')
    if (inputName.value === '' || inputMarks.value === '') {
        return alert('please full fill input')
    }
    const studentInfoObject = {
        'name': inputName.value,
        'marks': inputMarks.value
    }
    studentsInfoArray.push(studentInfoObject)


    const infoHere = document.getElementById('infoHere')
    infoHere.innerHTML = ''
    for (let studentInfo of studentsInfoArray) {
        infoHere.innerHTML += ` <p>name: ${studentInfo.name} marks: ${studentInfo.marks} </p>`
    }

    inputName.value = ''
    inputMarks.value = ''
    // window.location.href = 'student-info.html'
})
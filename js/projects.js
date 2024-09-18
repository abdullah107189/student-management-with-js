let studentsInfoArray = JSON.parse(localStorage.getItem('studentsInfoArray')) || [];

const addStudentBtn = document.getElementById('addStudentBtn')
addStudentBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('input-name')
    const inputAge = document.getElementById('input-age')
    if (inputName.value === '' || inputAge.value === '') {
        return alert('please full fill input')
    }
    const datas = document.querySelector('input[name="gender"]:checked')
    if (!datas) {
        return alert('add gender')
    }

    const studentInfoObject = {
        'name': inputName.value,
        'marks': inputAge.value,
        'gender': datas.value
    }
    studentsInfoArray.push(studentInfoObject)
    localStorage.setItem('studentsInfoArray', JSON.stringify(studentsInfoArray))


    inputName.value = '';
    inputAge.value = '';
    window.location = 'student-info.html'
})
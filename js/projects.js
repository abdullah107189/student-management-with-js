let studentsInfoArray = JSON.parse(localStorage.getItem('studentsInfoArray')) || [];

const addStudentBtn = document.getElementById('addStudentBtn')
addStudentBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('input-name')
    const inputAge = document.getElementById('input-age')
    const inputEmail = document.getElementById('input-email')
    const inputPhoneNumber = document.getElementById('input-phone-number')
    const inputDateOfBirth = document.querySelector('#input-birth')
    if (inputName.value === '' || inputAge.value === '' || inputEmail.value === '' || inputPhoneNumber.value === '' || inputDateOfBirth === '') {
        return alert('please full fill input')
    }
    const datas = document.querySelector('input[name="gender"]:checked')
    if (!datas) {
        return alert('add gender')
    }

    const studentInfoObject = {
        'name': inputName.value,
        'marks': inputAge.value,
        'gender': datas.value,
        'email': inputEmail.value,
        'phone': inputPhoneNumber.value,
        'dob': inputDateOfBirth.value
    }
    studentsInfoArray.push(studentInfoObject)
    console.log(studentsInfoArray)
    localStorage.setItem('studentsInfoArray', JSON.stringify(studentsInfoArray))


    inputName.value = '';
    inputAge.value = '';
    window.location = 'student-info.html'
})
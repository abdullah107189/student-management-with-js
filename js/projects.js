let studentsInfoArray = JSON.parse(localStorage.getItem('studentsInfoArray')) || [];

const addStudentBtn = document.getElementById('addStudentBtn')
addStudentBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('input-name')
    const inputAge = document.getElementById('input-age')
    const inputEmail = document.getElementById('input-email')
    const inputPhoneNumber = document.getElementById('input-phone-number')
    const inputDateOfBirth = document.querySelector('#input-birth')
    const imageSelect = document.getElementById('image-select').files[0]
    if(imageSelect && imageSelect.size > 307200){
        return alert('Image size must be less then 300KB')
    }
    
    const reader = new FileReader()
    reader.onload = () => {
        const imageURL = reader.result;
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
            'dob': inputDateOfBirth.value,
            'img': imageURL
        }
        studentsInfoArray.push(studentInfoObject)
        localStorage.setItem('studentsInfoArray', JSON.stringify(studentsInfoArray))


        inputName.value = '';
        inputAge.value = '';
        window.location = 'student-info.html'
    }

    reader.readAsDataURL(imageSelect)
})
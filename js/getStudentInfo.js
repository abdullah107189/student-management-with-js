const getData = JSON.parse(localStorage.getItem('studentsInfoArray'));
const getStudentData = (allStudent) => {
    const cards = document.querySelector('.cards')
    if (allStudent.length === 0) {
        cards.innerHTML = `<p class="empty">There are no student info</p>`
    }
    for (let data of allStudent) {
        const cards = document.querySelector('.cards')

        const card = document.createElement('div')
        card.className = 'card';
        card.innerHTML = `
                 <div class="cardContainer">
        <div>

            <p><span class="bold-label">Name:</span> ${data.name}</p>
            <p><span class="bold-label">Marks:</span> ${data.marks}</p>
            <p><span class="bold-label">Gender:</span> ${data.gender}</p>
            <p><span class="bold-label">Email:</span> ${data.email}</p>
            <p><span class="bold-label">Phone:</span> ${data.phone}</p>
            <p><span class="bold-label">Date:</span> ${data.dob}</p>

            <div class="btnContainer">
                <button>Update</button>
                <button onclick="deleteInfo(this)">Delete</button>
            </div>
        </div>
        <img width="200px" hight="auto" src=${data.img} alt="">
    </div>
                  
        `
        cards.appendChild(card)
    }
}
getStudentData(getData)
const studentSearch = document.getElementById('studentSearch')
studentSearch.addEventListener('keyup', (e) => {
    const serchText = e.target.value.toLowerCase()
    console.log(serchText)
    const filterCard = getData.filter(student => {
        return (student.name.toLowerCase().includes(serchText) || student.email.toLowerCase().includes(serchText))
    });

    const cards = document.querySelector('.cards')
    cards.innerHTML = ''
    getStudentData(filterCard)
})

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(studentSearch.value)

}


// // localStorage delete section 
// const deleteInfo = (e) =>{
//     console.log(e)
// }
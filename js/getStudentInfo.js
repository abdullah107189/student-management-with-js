const getData = JSON.parse(localStorage.getItem('studentsInfoArray'));
for (let data of getData) {
    const cards = document.querySelector('.cards')

    const card = document.createElement('div')
    card.className = 'card';
    card.innerHTML = `
                    <p><span class="bold-label">Name:</span> ${data.name}</p>
                    <p><span class="bold-label">Marks:</span> ${data.marks}</p>
                    <p><span class="bold-label">Gender:</span> ${data.gender}</p>
                    <p><span class="bold-label">Email:</span> ${data.email}</p>
                    <p><span class="bold-label">Phone:</span> ${data.phone}</p>
                    <p><span class="bold-label">Date:</span> ${data.dob}</p>
                    <div class="btnContainer">
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
              
    `
    cards.appendChild(card)
}
const studentSearch = document.getElementById('studentSearch')
studentSearch.addEventListener('keyup', (e) => {
    const serchText = e.target.value
    console.log(serchText)
    if (getData.includes(serchText)) {
        console.log()
        //todo
    }

})

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(studentSearch.value)

}
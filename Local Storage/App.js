const StudentForm = document.getElementById('studentForm')
const Studnetcontainer = document.querySelector('.row2')
const nameInput = StudentForm['name']
const department = StudentForm['Department']
const Level = StudentForm['Level']
const matricNumber = StudentForm['Matric']

const students = JSON.parse(localStorage.getItem('students')) || []
const addStudents = (name, department, level, matricNumber)=>{
    students.push({
        name,
        department,
        level,
        matricNumber
    })

    localStorage.setItem('students', JSON.stringify(students))

    return({name, department, level, matricNumber})


}

const Create  = ({name, department, level, matricNumber})=>{
    
    const studentDiv = document.createElement('div')
    const studentName = document.createElement('h3')
    const studentDept = document.createElement('p')
    const studentLvl = document.createElement('p')
    const studentMat = document.createElement('p')

    studentName.innerText= "Student Name: " + name
    studentDept.innerText= "Student Department: " + department
    studentLvl.innerText= "Student Level: " + level
    studentMat.innerText= "Student Matric Number: " + matricNumber

    studentDiv.setAttribute('class', 'studentDiv')

    studentDiv.append(studentName, studentDept, studentLvl, studentMat)

    Studnetcontainer.appendChild(studentDiv)
    Studnetcontainer.style.display = students.length ==0 ? 'none' : "flex"
}
 Studnetcontainer.style.display = students.length ==0 ? 'none' : "flex"

students.forEach(Create)

StudentForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const newStudent = addStudents(
        nameInput.value,
        department.value, 
        Level.value, 
        matricNumber.value
    )
    Create(newStudent)
    /*nameInput.value=''
    department.value='' 
    Level.value=''
    matricNumber.value=''*/
})
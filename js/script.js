$("#inputphone3").mask('(00) 00000-0000')
let alunos = [
  {
    id: 1,
    name: 'Pedro Antonio',
    email: 'pedro@gmail.com',
    phone: '(15) 99999-9999',
    course: 1,
    period: 'Tarde',
  }
]


const periodos = [
  {id: 1, course: 'Java'},
  {id: 2, course: 'Python'},
  {id: 3, course: 'TypeScript'},
  {id: 4, course: 'Angular'},
  {id: 5, course: 'React'}
]



document.getElementById('registerForm').addEventListener("submit", function(event) {
  event.preventDefault()
  let newAluno = {
    id: alunos.length + 1,
    name: document.getElementById('inputName3').value,
    email: document.getElementById('inputEmail3').value,
    phone: document.getElementById('inputphone3').value,
    course: document.getElementById('languages').value,
    period: document.querySelector('input[name=exampleRadios]:checked').value
  }
  console.log(newAluno)
  alunos.push(newAluno)

})
import axios from 'axios'
const baseUrl = '/api/users'

// const getAll = () => {
//   const request = axios.get(baseUrl)
//   return request.then(response => response.data)
// }

const register = (newObject) => { //front end will call this function, passing the user details to reg, 
  const request = axios.post(baseUrl, newObject)    // then it will call the post function defined in user router, passing the object
  return request.then(response => response.data)
}


const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
        
}

const update = (newObject) => {
    const request = axios.put(`${baseUrl}/${newObject.id}`,newObject)
    return request.then(response => response.data) 
}

export default {register,remove,update}


//for frontend

  const [firstName,setFirstName] = useState('') // do this for each field, each state = value in form.
  //Function for on submit
  const registerAccount = (event) => {
    event.preventDefault()
    
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        department: department,
        moduleID: moduleID,
        urgentEC: false,
        amountOfEC: (moduleID === null && department === null) ? 7 : 0,
      }

      userService
      .register(newUser) //backend
      .then(newEntry => {
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        
      })
      .catch(error =>{
        console.log(error)
      })
      
    }


//   const removePerson = (id,name) => {
//     const r = window.confirm(`Delete ${name } ?`)
//     if (r)
//     {
//       personService.remove(id)
//       .catch(error => {
//         setErrorMessage(`${name} has already been removed from the server`)
//       })
//       setPersons(persons.filter(p => p.id !== id))
//     }
//   }
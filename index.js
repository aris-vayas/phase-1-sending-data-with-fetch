//create a function to subit json data
 
// make an object with key:value as name and email
const formData = {
  name: "Steve",
  email: "steve@steve.com",
};

//POST form JSON
const configurationObject = {
  method:"POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

//will fecth and sumbit our above objects
//returns our fetch() bases on above arguements
function submitData(){
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      let p=document.createElement('p')

      document.body.append(p)
     return p.innerText=object.id
      //return console.log(p);
    })}


submitData()
export  function  getAllData(){
 return fetch('http://localhost:3000/data',{ method: "GET",
  headers: {
    "Content-Type": "application/json"
  }}).then((response)=> response.json())
}


export  function  getDataById(id){
  return fetch(`http://localhost:3000/data/${id}`,{ method: "GET",
  headers: {
    "Content-Type": "application/json"
  }}).then((response)=>response.json())
 }

 export function postData(id,name,phoneNumber){
  return fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      id,
      name,
      phoneNumber
    })
  }).then(response => response.json())
 }

 export function deleteDataById(id){
  fetch(`http://localhost:3000/data/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": 'application/json'
    }
  })
 }

 export function updateData(dbID,name,phoneNumber){
  fetch(`http://localhost:3000/data/${dbID}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                  name,
                  phoneNumber
                })
              }).then(response=>response.json())
 }
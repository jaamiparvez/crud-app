export  function  getAllData(){
 return fetch('/data',{ method: "GET",
  headers: {
    "Content-Type": "application/json"
  }}).then((response)=> response.json())
}


export  function  getDataById(id){
  return fetch(`/data/${id}`,{ method: "GET",
  headers: {
    "Content-Type": "application/json"
  }}).then((response)=>response.json())
 }

 export function postData(id,name,phoneNumber){
  return fetch('/data', {
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
  fetch(`/data/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": 'application/json'
    }
  })
 }

 export function updateData(dbID,name,phoneNumber){

 }
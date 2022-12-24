
module.exports = {

   getData = async () => ({

    return fetch('http://localhost:3000/data',{
        method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status == "200") {
        return response.json();
      }
    })
    .catch(function(err) {
      console.log("error in getData ", err);
    })

})

}

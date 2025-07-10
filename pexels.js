

// 9dc1oAjCHV6riqxJi9SEx9OqXywsZjUr4cgqob3WbQ4aQYF7GxECDxQI

//bottone criceti 
const hamsters = "https://api.pexels.com/v1/search?query=hamsters"


const getHamsters = function () {
fetch(hamsters,{headers: {
  Authorization: '9dc1oAjCHV6riqxJi9SEx9OqXywsZjUr4cgqob3WbQ4aQYF7GxECDxQI',
},})
.then((response) => {
    if (response.ok) {
        return response.json()
    } else { throw new Error('operazione fallita!') }
    })
    .then((hamsterspic ) => {console.log(hamsterspic)})

    .catch((error) => {
        console.log('errore')
    })






}


getHamsters()
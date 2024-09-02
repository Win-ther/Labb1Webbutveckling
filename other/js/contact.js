function displayContacts(){
    const url = 'data/contact.json';
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            document.querySelector('#title').innerHTML = data.pageTitle;
            document.querySelector('#articleHead').innerHTML = data.articleHead;
            document.querySelector('#phone').innerHTML = data.phone;
            document.querySelector('#email').innerHTML = data.email;
            document.querySelector('#adress').innerHTML = data.adress;
            document.querySelector('#chat').innerHTML = data.chat;
        })
        .catch(function (error) {
            console.log(error);
        })
}
displayContacts();
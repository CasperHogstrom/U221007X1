ContactsClicked = () =>{
    const DivLista = document.getElementById('ListDiv');
    DivLista.hidden = false
    DivLista.innerHTML = '';
    const Contacts = new XMLHttpRequest;

    XHR.onload = () =>{
        var ContactArray = JSON.parse(XHR, Contacts);
    };

};
// Pytania do projektu 

// 1. 
// 2. 


// Kroki do wykonania 

// 1. Stworzenie markup w html 
// 2. Stworzyć funkcję która Po wpisaniu w inpucie link/tekst i ustawieniu czasu to ma sie wszystko  wyświetlić poniżej w liście ul
// 3. Napisanie funkcjonalnosci do głównego licznika , plus guzik start stop reset
// 4. Połączenie ustawionego czasu z inputa  a nasz licznik - czyli 
//         ustaliliśmy czas w inpucie 00:10 to wtedy kiedy licznik osiągnie 00:10 to ma nam wyświetlić obrazek 



const inputTeskt = document.querySelector('.input__tekst');
const inputSetTime = document.querySelector('.time');
const btnAdd = document.querySelector('.btnPlus');
const counterTime = document.querySelector('.counter__time');
const ulList = document.querySelector('.ul-list');
const alertInfo = document.querySelector('.alert-info')




// Tworzenie i spr elementu w naszej Liscie /wpisany tekst/ wybrany czas/ guzik usun
const addNewLink = () => {

    if (inputTeskt.value !== '' && inputSetTime.value !== '') {
        creatDiv();
        alertInfo.innerText = '';
        inputTeskt.value = '';
    } else {
        alertInfo.innerText = " Alert ! Wpisz jakiś tekst i wybierz czas"
    }

}

function creatDiv() {
    // tworze diva który będzie przechowywał  wpisany tekst /guzik do usunięcia i nasz ustawiony czas
  
    const panelDiv = document.createElement('div');
    panelDiv.classList.add('panel');
    ulList.appendChild(panelDiv);

    const newLinkTekst = document.createElement('li');
    newLinkTekst.innerText = inputTeskt.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btnDelete');
    deleteBtn.textContent = 'usuń';

    const newLinkTime = document.createElement('p');
    newLinkTime.innerText = inputSetTime.value;

    panelDiv.appendChild(newLinkTekst);
    panelDiv.appendChild(newLinkTime);
    panelDiv.appendChild(deleteBtn);



}

// Usunięcie elementu z naszej listy 

function deleteElement(e) {
    // nasze e to event który przechwytamy , tutaj e to nasz Click / ,puse event 
    // sprawdzamy czy najbliższy button elementu w który kliknęliśmy zawiera klase btnDelete
    if (e.target.closest('button').classList.contains('btnDelete')) {
        console.log(e)
        console.log(e.target)
        console.log(e.target.closest('div'))
        const deleteElement = e.target.closest('div')
        deleteElement.remove();
    }
}



btnAdd.addEventListener('click', addNewLink);
ulList.addEventListener('click', deleteElement)





// Timer 
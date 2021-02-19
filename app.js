// Pytania do projektu 

// 1. Czy mogę zrobić wersje najpierw z tekstem zamiast tego url ? odkryłam :D ze moge ustawic input type="url", ale nie rozumiem o co chodzi z tym placeholderem , ze ma sie tam wyswietlić obrazek z linku , ale przecież placeholder to np w nim umieszczamy jakiś tekst który pojawia sie w inpucie hmmm  


// 2. Czy to ma byc stoper czy po prostu jakiś licznik , hmm dobra licznik a stoper to chyba to samo:D , ale chodzi mi bardziej czy ma odliczać po włączeniu 1, 2, 3, 4, 5 itd (tak jak teraz działa ) , czy działaś jak stoper czyli 00:00:00 ( czyli wersja której nie umiałam ostatnio zrobić ale mogę poszukać odp na necie )


// 3. nie wiem czy dobry input wykorzystałam input type="time" , czy może tutaj powinnam wykorzystać coś innego ? , bo przecież kolejny krok to chyba jakoś połączyć to czyli ustawiony czas  z czasem ktory wybije nasz timer 



// Moje Kroki które muszę wykonać:

// 1. Stworzenie markup w html 
// 2. Stworzyć funkcjonalnosc, która po wpisaniu w inpukt jakis tekst i ustawieniu czasu , wyświetli nam sie to w naszym ul
// 3. Napisanie funkcji która będzie usuwać nasz dodany element z tymi 3 rzeczami(tekst,czas,guzik)
// 4. Napisanie funkcjonalnosci do głównego licznika , plus guziki start stop reset
// 5. Połączenie ustawionego czasu z inputa  a nasz licznik - czyli 
//         ustaliliśmy czas w np 00:10 to wtedy kiedy licznik osiągnie 00:10 to ma nam wyświetlić obrazek / wersja druga cos zrobic z tekstem 



const inputTeskt = document.querySelector('.input__tekst');
const inputSetTime = document.querySelector('.time');
const btnAdd = document.querySelector('.btnPlus');
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
    // nasze e to event który przechwytamy , tutaj e to nasz Click / mouse event 
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

const btnStartCounter = document.querySelector('.btnStart');
const btnStopCounter = document.querySelector('.btnStop');
const btnResetCounter = document.querySelector('.btnReset');
const counterTime = document.querySelector('.counter__time')
let number = 0;
let idSetInterval = false;

function startTimer() {
    idSetInterval = true; // nie moge ponownie kliknac bo handleClick, zamieni sie na false i nie wchodzi do srodka wiec nie odpala nam ponownie startTimer()
    idSetInterval = setInterval(() => {
        number++;
        counterTime.textContent = number;

    }, 1000)
}

function stopTimer() {
    clearInterval(idSetInterval)
    idSetInterval = false;
}

function handleClick() {
    if (!idSetInterval) {
        startTimer();
    }
}

function resetClick(e) {
    number = 0;
    counterTime.textContent = 0;
    clearInterval(idSetInterval);
    idSetInterval = false;
  
}

btnStartCounter.addEventListener('click', handleClick)
btnStopCounter.addEventListener('click', stopTimer)
btnResetCounter.addEventListener('click', resetClick)
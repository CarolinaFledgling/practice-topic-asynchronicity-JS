// Moje Kroki które muszę wykonać:

// 1. Stworzenie markup w html 
// 2. Stworzyć funkcjonalnosc, która po wpisaniu w inpukt jakis tekst i ustawieniu czasu , wyświetli nam sie to w naszym ul
// 3. Napisanie funkcji która będzie usuwać nasz dodany element z tymi 3 rzeczami(tekst,czas,guzik)
// 4. Napisanie funkcjonalnosci do głównego licznika , plus guziki start stop reset
// 5. Połączenie ustawionego czasu z inputa  a nasz licznik - czyli 
//         ustaliliśmy czas w np 00:10 to wtedy kiedy licznik osiągnie 00:10 to ma nam wyświetlić obrazek / wersja druga cos zrobic z tekstem 
// Co ja musze zrobić wpisuje 



const inputTeskt = document.querySelector('.input__tekst');
const inputSetTime = document.querySelector('.time');
const btnAdd = document.querySelector('.btnPlus');
const ulList = document.querySelector('.ul-list');
const alertInfo = document.querySelector('.alert-info')



let img = null;


// próby zrobienia bez podpięcia timera , tylko zwykły settimeout po upływie 5 ma wyswietlic obrazek z linku 


function change() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, timeFromInput)
    }).then(function () {

        // tworze tutaj nowego div zeby moc go dodac do ul list, nie moge wciaz panelDiv z funkcji createDiv bo go nie widzi w promise 
        // const panelDiv1 = document.createElement('div');
        // panelDiv1.classList.add('panel');
        // ulList.appendChild(panelDiv1);
        img = document.createElement('img');
        img.style.width = '400px';
        img.src = inputTeskt.value;
        panelDiv.appendChild(img)

    })
}

//dla sprawdzenia czy działa po prostu z góry wpisana wartościa 
timeFromInput = 5000;






// Tworzenie i spr elementu w naszej Liscie /wpisany tekst/ wybrany czas/ guzik usun
const addNewLink = () => {

    if (inputTeskt.value !== '' && inputSetTime.value !== '') {
        creatDiv();
        alertInfo.innerText = '';
        inputTeskt.value = '';
    } else {
        alertInfo.innerText = " Alert ! Wpisz jakiś url i wybierz czas"
    }


}

function creatDiv() {
    // tworze diva który będzie przechowywał  wpisany tekst /guzik do usunięcia i nasz ustawiony czas

    const panelDiv = document.createElement('div');
    panelDiv.classList.add('panel');
    ulList.appendChild(panelDiv);

    const UrlLink = document.createElement('li');
    UrlLink.innerText = inputTeskt.value;


    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btnDelete');
    deleteBtn.textContent = 'usuń';

    const newLinkTime = document.createElement('p');
    newLinkTime.innerText = inputSetTime.value;
    timeFromInput = inputSetTime.value;
    console.log(timeFromInput)

    // img = document.createElement('img');
    // img.style.width = '400px';
    // img.src = inputTeskt.value;


  
    panelDiv.appendChild(UrlLink);
    panelDiv.appendChild(newLinkTime);
    panelDiv.appendChild(deleteBtn);
    change()

}

// nie wiem czy dobrze , wyciągnięcie naszego czasu wpisanego w input do zakresu globalnego 
ourTimefromInput = timeFromInput


//Usunięcie elementu z naszej listy 

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
    idSetInterval = setIntervalse(() => {
        number++;
        counterTime.textContent = number;
        console.log(number)

    }, 1000)

}

naszCzasZTimera = number;

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



//Przykład 

//po uplywie 5s zmien kolor guzika btn  



function change2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, ms)
    }).then(function () {
        btnAdd.style.backgroundColor = 'red'
    })
}
ms = 5000;
change2()
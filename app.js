const inputTeskt = document.querySelector('.input__tekst');
const inputSetTime = document.querySelector('.time');
const btnAdd = document.querySelector('.btnPlus');
const ulList = document.querySelector('.ul-list');
const alertInfo = document.querySelector('.alert-info')



let img = null;


function change(panelDiv) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(panelDiv)
        }, inputSetTime.value)
    }).then(function (panelDiv) {
        img = document.createElement('img');
        img.style.width = '400px';
        img.src = inputTeskt.value;
        panelDiv.prepend(img)

    })
}


function creatListElement() {
    // tworze diva który będzie przechowywał  wpisany tekst /guzik do usunięcia i nasz ustawiony czas
    if (inputTeskt.value !== '' && inputSetTime.value !== '') {
        const panelDiv = document.createElement('div');
        panelDiv.classList.add('panel');
        ulList.appendChild(panelDiv);

        const UrlLink = document.createElement('li');
        UrlLink.innerText = inputTeskt.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btnDelete');
        deleteBtn.textContent = 'usuń';

        const ourSetTime = document.createElement('p');
        ourSetTime.innerText = inputSetTime.value;
        ourTimeInInput = inputSetTime.value;

        console.log(inputSetTime.value)

        panelDiv.appendChild(UrlLink);
        panelDiv.appendChild(ourSetTime);
        panelDiv.appendChild(deleteBtn);
        change(panelDiv)

        alertInfo.innerText = '';
        inputSetTime.value = '';




    } else {
        alertInfo.innerText = " Alert ! Wpisz jakiś url i wybierz czas"
    }
}





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



btnAdd.addEventListener('click', creatListElement);
ulList.addEventListener('click', deleteElement);

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
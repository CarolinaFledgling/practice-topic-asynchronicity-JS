const inputTeskt = document.querySelector('.input__tekst');
const inputSetTime = document.querySelector('.time');
const btnAdd = document.querySelector('.btnPlus');
const ulList = document.querySelector('.ul-list');
const alertInfo = document.querySelector('.alert-info')



let img = null;


// próby zrobienia bez podpięcia timera , tylko zwykły settimeout po upływie 5 ma wyswietlic obrazek z linku 


function change(panelDiv) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(panelDiv)
        }, timeFromInput)
    }).then(function (panelDiv) {
        img = document.createElement('img');
        img.style.width = '400px';
        img.src = inputTeskt.value;
        panelDiv.prepend(img)

    })
}

//dla sprawdzenia czy działa po prostu z góry wpisana wartościa 
timeFromInput = 5000;


// }

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
ulList.addEventListener('click', deleteElement)
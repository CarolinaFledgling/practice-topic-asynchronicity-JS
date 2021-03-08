  const inputOurText = document.querySelector('.input__tekst');
  const inputSetTime = document.querySelector('.time');
  const btnAdd = document.querySelector('.btnPlus');
  const ulList = document.querySelector('.ul-list');
  const alertInfo = document.querySelector('.alert-info')

  let img = null;
  let timeFromInput = null;





  function delay(time = 0) {
      return new Promise((resolve, reject) => setTimeout(resolve, time))
  }

  function createImage(value) {
      img = document.createElement('img');
      img.style.width = '400px';
      img.src = value;
  }


  function animateDisplayItems() {
      const panelDiveFromCreatList = creatListElement()
      delay(timeFromInput)
          .then(() => {
              createImage(inputOurText.value)
              panelDiveFromCreatList.prepend(img)
          })
          .catch((err) => console.log(err, 'mamy błąd'))
  }


  function creatListElement() {
      // tworze diva który będzie przechowywał  wpisany tekst /guzik do usunięcia i nasz wpisany czas 
      if (inputOurText.value !== '' && inputSetTime.value !== '') {
          const panelDiv = document.createElement('div');
          panelDiv.classList.add('panel');
          ulList.appendChild(panelDiv);

          const urlLink = document.createElement('li');
          urlLink.innerText = inputOurText.value;

          const deleteBtn = document.createElement('button');
          deleteBtn.classList.add('btnDelete');
          deleteBtn.textContent = 'usuń';

          const ourSetTime = document.createElement('p');
          ourSetTime.innerText = inputSetTime.value;
          timeFromInput = inputSetTime.value;

          console.log(timeFromInput)

          panelDiv.appendChild(urlLink);
          panelDiv.appendChild(ourSetTime);
          panelDiv.appendChild(deleteBtn);


          alertInfo.innerText = '';
          inputSetTime.value = '';

          return panelDiv
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



  btnAdd.addEventListener('click', animateDisplayItems);
  ulList.addEventListener('click', deleteElement);

  // Timer 

  const btnStartCounter = document.querySelector('.btnStart');
  const btnStopCounter = document.querySelector('.btnStop');
  const btnResetCounter = document.querySelector('.btnReset');
  const jsCounterTime = document.querySelector('.counter__time')
  let number = 0;
  let idSetInterval = false;

  function startTimer() {
      idSetInterval = setInterval(() => {
          number++;
          jsCounterTime.textContent = number;
          console.log(number)

      }, 1000)

  }

  ourTimeFromCounter = number;

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
      jsCounterTime.textContent = 0;
      clearInterval(idSetInterval);
      idSetInterval = false;

  }

  btnStartCounter.addEventListener('click', handleClick)
  btnStopCounter.addEventListener('click', stopTimer)
  btnResetCounter.addEventListener('click', resetClick)
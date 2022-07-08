function calcTicket() {
  const inputTickets = document.querySelectorAll('.input-ticket'),
    total = document.querySelector('.total span'),
    btnUp = document.querySelectorAll('.btn-calc'),
    numberSenior = document.querySelector('.number-senior'),
    numberBasic = document.querySelector('.number-basic');

  function totalPrice() {
    inputTickets.forEach((item) => {
      if (item.checked) {
        const name = item.value;
        switch (name) {
          case 'permanent':
            total.textContent =
              20 *
              (Number(numberBasic.value) +
                (Number(numberSenior.value) * 50) / 100);
            break;
          case 'temporary':
            total.textContent =
              25 *
              (Number(numberBasic.value) +
                (Number(numberSenior.value) * 50) / 100);
            break;
          case 'combined':
            total.textContent =
              40 *
              (Number(numberBasic.value) +
                (Number(numberSenior.value) * 50) / 100);
            break;
        }
      }
    });
  }

  btnUp.forEach((item) => {
    item.addEventListener('click', () => {
      totalPrice();
    });
  });

  inputTickets.forEach((item) => {
    item.addEventListener('input', () => totalPrice());
  });

  totalPrice();
}

export default calcTicket;

function mobileMenu() {
  const toggleButton = document.querySelector('.toggle-menu'),
    navBar = document.querySelector('.nav-bar'),
    welcomeContent = document.querySelector('.welcome-content');

  function changeMenu() {
    navBar.classList.toggle('toggle');
    toggleButton.classList.toggle('change');
    navBar.classList.toggle('show-nav');
    welcomeContent.classList.toggle('hide');
    document.body.classList.toggle('no-scroll');
    document.body.classList.toggle('open');
  }

  document.addEventListener('click', (e) => {
    const target = e.target,
      menuNav = target == navBar || target.closest('.nav-bar'),
      btnNav = target.closest('.toggle-menu'),
      navActive = navBar.classList.contains('toggle', 'show-nav');

    if (!menuNav && !btnNav && navActive) {
      changeMenu();
    }
  });

  toggleButton.addEventListener('click', changeMenu);
}

export default mobileMenu;

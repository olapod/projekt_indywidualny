function toggleMenu(visible) {
    document.querySelector('.mobile-menu-list').classList.toggle('show', visible)
  }

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    console.log('+++++++++++')
    });

    
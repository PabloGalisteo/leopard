(() => {
  const navbar = document.querySelector('.links-navbar');
  const navbarLinks = document.querySelectorAll('.nav-links');
  const underline = document.querySelector('.underline');

  // first we have to get width of active element
  // we have apply same width to underline

  const setUnderline = item => {
    const width = item.clientWidth;

    const newLeft = item.offsetLeft;

    underline.style.width = width + 'px';
    underline.style.left = newLeft + 'px';
  };

  // nodeList is similar to array
  // map, reduce,  X
  // forEach
  navbarLinks.forEach((item, index) => {
    if (item.classList.contains('active')) {
      setUnderline(item);
    }

    item.addEventListener('click', () => {
      if (!item.classList.contains('active')) {
        navbarLinks.forEach(i => {
          i.classList.remove('active');
        });
        item.classList.add('active');
        setUnderline(item);
      }
    });
  });
})();

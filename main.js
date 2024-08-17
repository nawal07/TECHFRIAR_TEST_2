document.getElementById('hideButton').addEventListener('click', function () {
  const dashboard = document.getElementById('dashboard');
  const hideButtonToggle = document.getElementById('hideButton-toggle');
  const contents = document.getElementById('contents');
  dashboard.classList.add('hide');
  setTimeout(() => {
    dashboard.style.display = 'none';
    hideButtonToggle.classList.add('show');
    contents.classList.add('show');
  }, 100);
});

document
  .getElementById('showMenuResponsive')
  .addEventListener('click', function () {
    const newDashboard = document.getElementById('menuResponsive');
    const dashboard = document.getElementById('dashboardResponsive');

    dashboard.classList.remove('show');
    dashboard.classList.add('hide');
    newDashboard.classList.remove('hide');
    newDashboard.classList.add('show');
  });


  document
  .getElementById('hideMenuResponsive')
  .addEventListener('click', function () {
    const newDashboard = document.getElementById('menuResponsive');
    const dashboard = document.getElementById('dashboardResponsive');

    dashboard.classList.remove('hide');
    dashboard.classList.add('show');
    newDashboard.classList.remove('show');
    newDashboard.classList.add('hide');
  });


document
  .getElementById('hideButton-toggle')
  .addEventListener('click', function () {
    const dashboard = document.getElementById('dashboard');
    const hideButtonToggle = document.getElementById('hideButton-toggle');
    dashboard.style.display = 'block';
    setTimeout(() => {
      dashboard.classList.remove('hide');
    }, 10);
    hideButtonToggle.classList.remove('show');
  });

Array.prototype.forEach.call(
  document.getElementsByClassName('expandPayment'),
  function (element, index) {
    element.addEventListener('click', function () {
      const description = document.getElementsByClassName('paymentDescription');
      const expandPayment = document.getElementsByClassName('expandPayment');
      const shrinkPayment = document.getElementsByClassName('shrinkPayment');
      const paymentRows = document.getElementsByClassName('paymentRows');

      Array.prototype.forEach.call(description, function (desc, i) {
        desc.style.display = 'none';
        expandPayment[i].style.display = 'block';
        shrinkPayment[i].style.display = 'none';
        paymentRows[i].classList.remove('show');
      });

      description[index].style.display = 'block';
      expandPayment[index].style.display = 'none';
      shrinkPayment[index].style.display = 'block';
      paymentRows[index].classList.add('show');
    });
  }
);

Array.prototype.forEach.call(
  document.getElementsByClassName('shrinkPayment'),
  function (element, index) {
    element.addEventListener('click', function () {
      const description = document.getElementsByClassName('paymentDescription');
      const expandPayment = document.getElementsByClassName('expandPayment');
      const shrinkPayment = document.getElementsByClassName('shrinkPayment');
      const paymentRows = document.getElementsByClassName('paymentRows');

      description[index].style.display = 'none';
      expandPayment[index].style.display = 'block';
      shrinkPayment[index].style.display = 'none';
      paymentRows[index].classList.add('hide');
    });
  }
);

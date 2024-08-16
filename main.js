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

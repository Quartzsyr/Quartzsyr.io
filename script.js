// 切换主题
const themeSwitch = document.querySelector('.theme-switch');
const body = document.querySelector('body');

themeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icon = themeSwitch.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

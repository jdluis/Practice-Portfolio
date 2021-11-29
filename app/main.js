// Cambiar tema de colores de la pagina.

let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('white');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'white') {
    document.getElementById('switcher-id').href = 'styles//themes/white.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = 'styles//themes/dark.css';
  } else if (theme == 'grey') {
    document.getElementById('switcher-id').href = 'styles//themes/grey.css';
  } else if (theme == 'purple') {
    document.getElementById('switcher-id').href = 'styles//themes/purple.css';
  }
  localStorage.setItem('style', theme);
}
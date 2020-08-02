const userSettings = {};
alert('Налаштуйте сторінку')

userSettings.background = prompt('Виберіть фон для сторінки. Приклад : red, black, white, тощо');

userSettings.fontFamily = prompt('Виберіть тип шрифта для сторінки. Приклад : Roboto, Changa, Open Sans .');

userSettings.textAlign = prompt('Виберіть тип вирівнювання для заголовка My Page . Приклад : center, right, тощо');

userSettings.backgroundLinkParagraph = prompt('Виберіть фон для параграфа з посилань. Приклад : red, black, blue, тощо');

userSettings.linkTextColor = prompt('Виберіть колір тексту для параграфа з посилань . Приклад : red, black, blue, тощо');

userSettings.div = {
    color: prompt('Виберіть колір для параграфа списку справ. Приклад : red, black, white, тощо'),
    size: prompt('Виберіть розмір тексту для параграфа списку справ. Приклад : 24, 36, тощо'),
    weight: prompt('Виберіть товщину тексту для параграфа списку справ. Приклад : 100, 200, 300, 400 чи текстовы аналоги : light, bold, ...'),
}

userSettings.markerType = prompt('Виберіть тип маркера для списку справ . Приклад : circle, square, disc,  тощо');

userSettings.link = [prompt('Введіть назву веб-сайту, що Ви відвідали . Наприклад : google.com'), prompt('Введіть назву найкориснішого веб-сайту для Вас  . Наприклад : google.com'), prompt('Введіть назву найулюбленішого веб-сайту для Вас  . Наприклад : google.com')
]

console.log(userSettings)

const body = document.querySelector('body');
body.style.background = userSettings.background;
body.style.fontFamily = `'${userSettings.fontFamily}' , sans-serif'`;
body.firstElementChild.style.fontStyle = userSettings.fontType;
body.firstElementChild.style.textAlign = userSettings.textAlign;
body.querySelector('p').style.background = userSettings.backgroundLinkParagraph;

const h2 = document.querySelector('h2');
h2.style.color = userSettings.div.color;
h2.style.fontSize = userSettings.div.size + 'px';
h2.style.fontWeight = userSettings.div.weight;

const lis = document.querySelectorAll('li')
for (let elem of lis) {
    elem.style.listStyleType = userSettings.markerType;
}

const links = document.querySelectorAll('a');
for (let i = 0; i< links.length; i++) {
    links[i].style.color = userSettings.linkTextColor;
    links[i].href = addHttps(userSettings.link[i]);
    links[i].innerHTML = userSettings.link[i]
}

function addHttps(str) {
    return 'https://www.' + str
}

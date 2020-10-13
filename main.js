let count = 0; //змінна для перевірки включення жирності для тексту
// функція для задання і забирання жирності тесту
document.querySelector('#bold').addEventListener('click', function () {
    if (count == 0) {
        document.querySelector('.main').style.fontWeight = 'bold';
        this.style.backgroundColor = 'lightgrey';
        count = 1;
    }
    else if (count == 1) {
        document.querySelector('.main').style.fontWeight = 'normal';
        this.style.backgroundColor = 'whitesmoke';
        count = 0;
    }
})

let a = 0;//змінна для перевірки включення курсивності для тексту
// функція для задання і забирання курсивності тесту
document.querySelector('#italic').addEventListener('click', function () {
    if (a == 0) {
        document.querySelector('.main').style.fontStyle = 'italic';
        this.style.backgroundColor = 'lightgrey';
        a = 1;
    }
    else if (a == 1) {
        document.querySelector('.main').style.fontStyle = 'normal';
        this.style.backgroundColor = 'whitesmoke';
        a = 0;
    }
})

let und = 0;//змінна для перевірки включення підкреслення для тексту
let through = 0;//змінна для перевірки включення закреслення тексту
// функція для задання і забирання підкресленості тесту
document.querySelector('#underline').addEventListener('click', function () {
    if (und == 0) {
        document.querySelector('.main').style.textDecoration = 'underline';
        this.style.backgroundColor = 'lightgrey';
        und = 1;
        through = 0;
        document.querySelector('#strikeThrough').style.backgroundColor = 'whitesmoke';
    }
    else if (und == 1) {
        document.querySelector('.main').style.textDecoration = 'none';
        this.style.backgroundColor = 'whitesmoke';
        und = 0;
        through = 0;
        document.querySelector('#strikeThrough').style.backgroundColor = 'whitesmoke';
    }
})

// функція для задання і забирання закреслення для тесту
document.querySelector('#strikeThrough').addEventListener('click', function () {
    if (through == 0) {
        document.querySelector('.main').style.textDecoration = 'line-through';
        this.style.backgroundColor = 'lightgrey';
        und = 0;
        through = 1;
        document.querySelector('#underline').style.backgroundColor = 'whitesmoke'
    }
    else if (through == 1) {
        document.querySelector('.main').style.textDecoration = 'none';
        this.style.backgroundColor = 'whitesmoke';
        und = 0;
        through = 0;
        document.querySelector('#underline').style.backgroundColor = 'whitesmoke'
    }
})

// функція для закривання модальних вікон(значаок хрестика)
function close() {
    document.querySelector('.colors').style.display = 'none';
    document.querySelector('#color').style.backgroundColor = 'whitesmoke'
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('.image').style.display = 'none';
    document.querySelector('#backgroundColor').style.backgroundColor = 'whitesmoke';
    document.querySelector('textarea').style.backgroundColor = 'white';
    f1.style.display = 'none';
    ol.style.display = 'none';
    ul.style.display = 'none';
}

// функція для розміщення тесту зліва
document.querySelector('#left').addEventListener('click', function () {
    document.querySelector('.main').style.textAlign = 'left';
})

// функція для розміщення тесту по центру
document.querySelector('#center').addEventListener('click', function () {
    document.querySelector('.main').style.textAlign = 'center';
})

// функція для розміщення тесту справа
document.querySelector('#right').addEventListener('click', function () {
    document.querySelector('.main').style.textAlign = 'right';
})

// функція для з'являння блоку з шрифтами для тексту
document.querySelector('#fontFamily').addEventListener('click', function () {
    document.querySelector('.fontsFamily').style.display = 'flex';
    this.style.backgroundColor = 'lightgrey';
})

// функція для вибору шрифта для тексту
document.querySelector('.fontsFamily').addEventListener('click', function (event) {
    document.querySelector('.main').style.fontFamily = event.target.value;
    document.querySelector('#fontFamily').style.backgroundColor = 'whitesmoke';
    this.style.display = 'none';
})

// функція для з'являння блоку з розмірами шрифтів для тексту
document.querySelector('#fontSize').addEventListener('click', function () {
    document.querySelector('.fontsSize').style.display = 'flex';
    this.style.backgroundColor = 'lightgrey';
})

// функція для вибору розміру шрифта для тексту
document.querySelector('.fontsSize').addEventListener('click', function (event) {
    document.querySelector('.main').style.fontSize = event.target.value;
    document.querySelector('#fontSize').style.backgroundColor = 'whitesmoke';
    this.style.display = 'none';
})

// функція для з'являння блоку з кольорами для тексту
document.querySelector('#color').addEventListener('click', function () {
    document.querySelector('.colors').style.display = 'block';
    document.querySelector('body').style.backgroundColor = 'gray';
    this.style.backgroundColor = 'lightgrey';
    document.querySelector('#close1').addEventListener('click', close)
})

// функція для вибору кольору тексту
document.querySelector('.color-flex').addEventListener('click', function (event) {
    document.querySelector('.main').style.color = event.target.style.backgroundColor;
})

// функція для з'являння блоку з кольорамиб картинками і постланням для заднього фону
document.querySelector('#backgroundColor').addEventListener('click', function () {
    document.querySelector('.image').style.display = 'block';
    document.querySelector('body').style.backgroundColor = 'gray';
    this.style.backgroundColor = 'lightgrey';
    document.querySelector('#close2').addEventListener('click', close)
})

// функція для вибору кольору заднього фону
document.querySelector('.backgroundColor-flex').addEventListener('click', function (event) {
    document.querySelector('.main').style.background = event.target.style.backgroundColor;
})

// функція для з'являння блоку з кольорами
document.querySelector('.images').addEventListener('click', function (event) {
    document.querySelector('.main').style.background = event.target.style.backgroundImage;
    document.querySelector('.main').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.main').style.backgroundSize = 'cover';
})

// функція для з'являння блоку з кольорами для заднього фону
document.querySelector('#first').addEventListener('click', function () {
    document.querySelector('#first').classList.add('active');
    document.querySelector('#second').classList.remove('active');
    document.querySelector('#third').classList.remove('active');
    document.querySelector('.backgroundColor-flex').style.display = 'flex';
    document.querySelector('.images').style.display = 'none';
    document.querySelector('.file').style.display = 'none';
    document.querySelector('.image').style.height = '385px';
})

// функція для з'являння блоку з картинками для заднього фону
document.querySelector('#second').addEventListener('click', function () {
    document.querySelector('#first').classList.remove('active');
    document.querySelector('#second').classList.add('active');
    document.querySelector('#third').classList.remove('active');
    document.querySelector('.backgroundColor-flex').style.display = 'none';
    document.querySelector('.images').style.display = 'flex';
    document.querySelector('.file').style.display = 'none';
    document.querySelector('.image').style.height = '445px';

})

// функція для з'являння блоку з завантаженням файлів для заднього фону
document.querySelector('#third').addEventListener('click', function () {
    document.querySelector('#first').classList.remove('active');
    document.querySelector('#second').classList.remove('active');
    document.querySelector('#third').classList.add('active');
    document.querySelector('.backgroundColor-flex').style.display = 'none';
    document.querySelector('.images').style.display = 'none';
    document.querySelector('.file').style.display = 'block';
    document.querySelector('.image').style.height = '170px';
})

// функція для задання на задній фон прикріпленого файлу
document.querySelector('.file').addEventListener('change', function (event) {
    let url = URL.createObjectURL(event.target.files[0]);
    document.querySelector('.main').style.background = `url(${url})`;
    document.querySelector('.main').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.main').style.backgroundSize = 'cover';
})

// функція для з'являння блоку для авторизації
document.querySelector('#signIn').addEventListener('click', function () {
    document.querySelector('.signIn').style.display = 'block';
    document.querySelector('body').style.backgroundColor = 'gray';
    this.style.backgroundColor = 'lightgrey';
})

let login = document.querySelector('#login'); //змінна в якій лежить інпут(логін)
let pass = document.querySelector('#password'); //змінна в якій лежить інпут(пароль)

let loginReg = /^admin$/; //регулярка для логіна
let passwordReg = /^1111$/; //регулярка для пароля

// функція для авторизації, і валідації полів логін та пароль
document.querySelector('#buttonSign').addEventListener('click', function () {
    if (login.value == 0 && pass.value == 0) {
        document.querySelector('.text').style.display = 'block';
        document.querySelector('.signIn').style.height = '274px';
        login.style.border = '1px solid red';
        pass.style.border = '1px solid red';
    }
    else {
        if (loginReg.test(login.value)) {
            login.style.border = '1px solid green';
            if (passwordReg.test(pass.value)) {
                pass.style.border = '1px solid green';
                document.querySelector('.text').style.display = 'none';
                document.querySelector('.signIn').style.height = '260px';
                document.querySelector('.signIn').style.display = 'none';
                document.querySelector('#signIn').style.backgroundColor = 'whitesmoke'
                document.querySelector('#signIn').style.display = 'none';
                document.querySelector('#signOut').style.display = 'block';
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('#edit').disabled = false;
            }
            else {
                pass.style.border = '1px solid red';
                document.querySelector('.text').style.display = 'block';
                document.querySelector('.text').textContent = 'Please check your login or password';
                document.querySelector('.signIn').style.height = '280px'
            }
        }
        else {
            login.style.border = '1px solid red';
            document.querySelector('.text').style.display = 'block';
            document.querySelector('.text').textContent = 'Please check your login or password';
            document.querySelector('.signIn').style.height = '280px'
        }
    }
})

// функція для підтвердження виходу з аккаунту
document.querySelector('#signOut').addEventListener('click', function () {
    document.querySelector('.signOut').style.display = 'flex';
    document.querySelector('body').style.backgroundColor = 'gray';
})

// функція для скасування підтвердження виходу з аккаунту
document.querySelector('#cancel').addEventListener('click', function () {
    document.querySelector('.signOut').style.display = 'none';
    document.querySelector('body').style.backgroundColor = 'white';
})

// функція для виходу з аккаунту
document.querySelector('#buttonSignOut').addEventListener('click', function () {
    document.querySelector('#signIn').style.display = 'block';
    document.querySelector('#signOut').style.display = 'none';
    document.querySelector('.signOut').style.display = 'none';
    document.querySelector('body').style.backgroundColor = 'white';
    login.value = '';
    pass.value = '';
    login.style.border = '1px solid gray';
    pass.style.border = '1px solid gray';
    document.querySelector('#edit').disabled = true;
})

let f1 = document.forms['f1'];//форма №1, блок для створення таблиці
// функція для відкриття блоку для редагування тесту що лежав в .main
document.querySelector('#edit').addEventListener('click', function () {
    document.querySelector('.header-menu').style.display = 'none';
    document.querySelector('.header-edit').style.display = 'flex';
    document.querySelector('.main').style.display = 'none';
    document.querySelector('#editText').style.display = 'block';
    document.querySelector('#editText').textContent = document.querySelector('.main').innerHTML;
})

// функція для збереження змін і повернення зміненого значення в .main
document.querySelector('#save').addEventListener('click', function () {
    document.querySelector('.header-menu').style.display = 'flex';
    document.querySelector('.header-edit').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    document.querySelector('#editText').style.display = 'none';
    document.querySelector('.main').innerHTML = document.querySelector('#editText').value;
})

// функція для з'являння модального вікна з вказуванням характеристик таблиці для її створення
document.querySelector('#table').addEventListener('click', function () {
    f1.style.display = 'block';
    document.querySelector('textarea').style.backgroundColor = 'gray';
    this.style.backgroundColor = 'whitesmoke';

})

// закривання модального вікна з вказуванням характеристик таблиці для її створення
document.querySelector('#close3').addEventListener('click', close);

// функція для створення таблиці та переміщення в textarea
document.querySelector('#createTable').addEventListener('click', function () {
    this.style.outline = 'none';
    if (f1.tr.value == 0 && f1.td.value == 0 && f1.widthTd.value == 0 && f1.heightTd.value == 0 && f1.widthBorder.value == 0 && f1.typeBorder.options[0].selected == true && f1.colorBorder.options[0].selected == true) {
        f1.tr.style.border = '1px solid red';
        f1.td.style.border = '1px solid red';
        f1.widthTd.style.border = '1px solid red';
        f1.heightTd.style.border = '1px solid red';
        f1.widthBorder.style.border = '1px solid red';
        f1.typeBorder.style.border = '1px solid red';
        f1.colorBorder.style.border = '1px solid red';
        document.querySelector('.someText').style.display = 'block';
        document.querySelector('.table').style.height = '440px';
    }
    if (f1.tr.value.length > 0) {
        f1.tr.style.border = '1px solid gray';
    }
    if (f1.td.value.length > 0) {
        f1.td.style.border = '1px solid gray';
    }
    if (f1.widthTd.value.length > 0) {
        f1.widthTd.style.border = '1px solid gray';
    }
    if (f1.heightTd.value.length > 0) {
        f1.heightTd.style.border = '1px solid gray';
    }
    if (f1.widthBorder.value.length > 0) {
        f1.widthBorder.style.border = '1px solid gray';
    }
    if (f1.typeBorder.options[0].selected == false) {
        f1.typeBorder.style.border = '1px solid gray';

    } if (f1.colorBorder.options[0].selected == false) {
        f1.colorBorder.style.border = '1px solid gray';
    }
    if (f1.tr.value != 0 && f1.td.value != 0 && f1.widthTd.value != 0 && f1.heightTd.value != 0 && f1.widthBorder.value != 0 && f1.typeBorder.options[0].selected == false && f1.colorBorder.options[0].selected == false) {
        let tableTag = document.createElement('table');
        for (let i = 0; i < f1.tr.value; i++) {
            let trTag = document.createElement('tr');
            for (let j = 0; j < +f1.td.value; j++) {
                let tdTag = document.createElement('td');
                tdTag.textContent = 'TD'
                tdTag.style.width = f1.widthTd.value + 'px';
                tdTag.style.height = f1.heightTd.value + 'px';
                tdTag.style.borderWidth = f1.widthBorder.value + 'px';
                tdTag.style.borderStyle = f1.typeBorder.value;
                tdTag.style.borderColor = f1.colorBorder.value;
                trTag.appendChild(tdTag);
            }
            tableTag.appendChild(trTag)
        }
        document.querySelector('textarea').value += tableTag.outerHTML
        document.querySelector('.someText').style.display = 'none';
    }
    if (f1.colorBorder.options[0].selected == true) {
        f1.colorBorder.style.border = '1px solid red';
    }
    if (f1.typeBorder.options[0].selected == true) {
        f1.typeBorder.style.border = '1px solid red';
    }
    if (f1.widthBorder.style.value == 0) {
        f1.widthBorder.style.border = '1px solid red';
    }
    if (f1.heightTd.style.value == 0) {
        f1.heightTd.style.border = '1px solid red';
    }
    if (f1.widthTd.style.value == 0) {
        f1.widthTd.style.border = '1px solid red';
    }
    if (f1.td.style.value == 0) {
        f1.td.style.border = '1px solid red';
    }
    if (f1.tr.style.value == 0) {
        f1.tr.style.border = '1px solid red';
    }
})

// функція для скидання даних з полів вводу характеристик таблиці
document.querySelector('#reset').addEventListener('click', function () {
    f1.tr.value = '';
    f1.td.value = '';
    f1.widthTd.value = '';
    f1.heightTd.value = '';
    f1.widthBorder.value = '';
    f1.typeBorder.value = 'default';
    f1.colorBorder.value = 'default';
    document.querySelector('.someText').style.display = 'none';
    f1.tr.style.border = '1px solid gray';
    f1.td.style.border = '1px solid gray';
    f1.widthTd.style.border = '1px solid gray';
    f1.heightTd.style.border = '1px solid gray';
    f1.widthBorder.style.border = '1px solid gray';
    f1.typeBorder.style.border = '1px solid gray';
    f1.colorBorder.style.border = '1px solid gray';
})

let ol = document.forms['ol']; //форма №2, нумерований список
// функція для з'являння модального вікна з вказуванням характеристик нумерованого списку для його створення
document.querySelector('#list1').addEventListener('click', function () {
    ol.style.display = 'block';
    document.querySelector('textarea').style.backgroundColor = 'gray';
    this.style.backgroundColor = 'whitesmoke';
})

// закривання модального вікна з вказуванням характеристик нумерованого списку для його створення
document.querySelector('#close4').addEventListener('click', close)

// функція для створення нумерованого списку та його переміщення в textarea
document.querySelector('#createOlList').addEventListener('click', function () {
    if (ol.countOl.value == 0 && ol.typeOl.options[0].selected == true) {
        ol.countOl.style.border = '1px solid red';
        ol.typeOl.style.border = '1px solid red';
        document.querySelector('.someText1').style.display = 'block';
        ol.style.height = '340px'
    }
    if (ol.countOl.value > 0) {
        ol.countOl.style.border = '1px solid gray';
    }
    if (ol.typeOl.options[0].selected == false) {
        ol.typeOl.style.border = '1px solid gray';
    }
    if (ol.countOl.value != 0 && ol.typeOl.options[0].selected == false) {
        let olTag = document.createElement('ol');
        for (let i = 0; i < +ol.countOl.value; i++) {
            let liTag = document.createElement('li');
            liTag.textContent = `item ${i + 1}`
            liTag.style.listStyleType = ol.typeOl.value;
            olTag.appendChild(liTag);
        }
        document.querySelector('textarea').value += olTag.outerHTML
        document.querySelector('.someText1').style.display = 'none';
        ol.style.height = '300px'
    }
    if (ol.countOl.value == 0) {
        ol.countOl.style.border = '1px solid red';
        document.querySelector('.someText1').style.display = 'block';
        ol.style.height = '340px'

    }
    if (ol.typeOl.options[0].selected == true) {
        ol.typeOl.style.border = '1px solid red';
        document.querySelector('.someText1').style.display = 'block';
        ol.style.height = '340px'

    }
})

// функція для скидання даних з полів вводу характеристик нумерованого списку
document.querySelector('#resetOl').addEventListener('click', function () {
    ol.countOl.value = '';
    ol.typeOl.value = 'default';
    document.querySelector('.someText1').style.display = 'none';
    ol.countOl.style.border = '1px solid gray';
    ol.typeOl.style.border = '1px solid gray';
})

let ul = document.forms['ul'];//форма №3, ненумерований список
// функція для з'являння модального вікна з вказуванням характеристик ненумерованого списку для його створення
document.querySelector('#list2').addEventListener('click', function () {
    ul.style.display = 'block';
    document.querySelector('textarea').style.backgroundColor = 'gray';
    this.style.backgroundColor = 'whitesmoke';
})

// закривання модального вікна з вказуванням характеристик ненумерованого списку для його створення
document.querySelector('#close5').addEventListener('click', close)

// функція для створення ненумерованого списку та його переміщення в textarea
document.querySelector('#createUlList').addEventListener('click', function () {
    if (ul.countUl.value == 0 && ul.typeUl.options[0].selected == true) {
        ul.countUl.style.border = '1px solid red';
        ul.typeUl.style.border = '1px solid red';
        document.querySelector('.someText2').style.display = 'block';
        ul.style.height = '340px'
    }
    if (ul.countUl.value > 0) {
        ul.countUl.style.border = '1px solid gray';
    }
    if (ul.typeUl.options[0].selected == false) {
        ul.typeUl.style.border = '1px solid gray';
    }
    if (ul.countUl.value != 0 && ul.typeUl.options[0].selected == false) {
        let ulTag = document.createElement('ul');
        for (let i = 0; i < +ul.countUl.value; i++) {
            let liTag = document.createElement('li');
            liTag.textContent = `item ${i + 1}`
            liTag.style.listStyleType = ul.typeUl.value;
            ulTag.appendChild(liTag)
        }
        document.querySelector('textarea').value += ulTag.outerHTML;
        document.querySelector('.someText2').style.display = 'none';
        ul.style.height = '300px';
    }

    if (ul.countUl.value == 0) {
        ul.countUl.style.border = '1px solid red';
        document.querySelector('.someText2').style.display = 'block';
        ul.style.height = '340px';
    }
    if (ul.typeUl.options[0].selected == true) {
        ul.typeUl.style.border = '1px solid red';
        document.querySelector('.someText2').style.display = 'block';
        ul.style.height = '340px';
    }
})

// функція для скидання даних з полів вводу характеристик ненумерованого списку
document.querySelector('#resetUl').addEventListener('click', function () {
    ul.countUl.value = '';
    ul.typeUl.value = 'default';
    document.querySelector('.someText2').style.display = 'none';
    ul.countUl.style.border = '1px solid gray';
    ul.typeUl.style.border = '1px solid gray';
})
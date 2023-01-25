let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'x', '-', '+'];

// экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; 
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
};

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    // if (!event.target.classlist.contains('btn')) return;
    // // нажата кнопка AC
    // if (event.target.classlist.contains('ac')) return;

    out.textContent = '';
    // получаю нажатаю кнопку
    const key = event.target.textContent;

    // если нажата кнопка 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
        a+=key;
        out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // если нажата кнопка +/-, %, /, x, -, +
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // нажата кнопка =
    if (key === '=') {
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }

    // нажата кнопка %
    if (key === '%') {
        a = (a / 100) * b;
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    };
};
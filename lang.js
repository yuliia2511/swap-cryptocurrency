const langArr = {
    'swap': {
        'en': 'Swap',
        'ua': 'Обмін',
    },
    'own': {
        'en': 'Select a Token',
        'ua': 'Обери Токен',
    },
    'received': {
        'en': 'Select a Token',
        'ua': 'Обери Токен',
    },
    'gas': {
        'en': 'Estimated Gas:',
        'ua': 'Комісія Мережі:',
    },
    'btn': {
        'en': 'Swap',
        'ua': 'Обмін',
    },
    'item': {
        'en': 'Select a Token',
        'ua': 'Обери Токен',
    },
}

const select = document.querySelector('.change-lang');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}
changeLanguage();
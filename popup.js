const languages_json = `[ { "name": "Afrikaans", "ext": "afr" }, { "name": "American Sign Language (ASL)", "ext": "ase" }, { "name": "Apache", "ext": "apw" }, { "name": "Aymar Aru", "ext": "aym" }, { "name": "Bahasa Indonesia", "ext": "ind" }, { "name": "Bahasa Malaysia", "ext": "msa" }, { "name": "Bats'i k'op", "ext": "tzo" }, { "name": "Bikol", "ext": "bik" }, { "name": "Bislama", "ext": "bis" }, { "name": "Cakchiquel", "ext": "cak" }, { "name": "Català", "ext": "cat" }, { "name": "Cebuano", "ext": "ceb" }, { "name": "Česky", "ext": "ces" }, { "name": "Chamoru", "ext": "cha" }, { "name": "Cymraeg", "ext": "cym" }, { "name": "Dansk", "ext": "dan" }, { "name": "Deutsch", "ext": "deu" }, { "name": "Diné bizaad", "ext": "nav" }, { "name": "Dulegaya", "ext": "cuk" }, { "name": "Èdè Yorùbá", "ext": "yor" }, { "name": "Eesti", "ext": "est" }, { "name": "Efik", "ext": "efi" }, { "name": "EkeGusii", "ext": "guz" }, { "name": "English", "ext": "eng" }, { "name": "Español", "ext": "spa" }, { "name": "Euskera", "ext": "eus" }, { "name": "Faka-tonga", "ext": "ton" }, { "name": "Fante", "ext": "fat" }, { "name": "Fiji Hindi", "ext": "hif" }, { "name": "Fosun Chuuk", "ext": "chk" }, { "name": "Français", "ext": "fra" }, { "name": "Gagana Samoa", "ext": "smo" }, { "name": "gana Tuvalu", "ext": "tvl" }, { "name": "Guaraní (Avañe'ẽ)", "ext": "grn" }, { "name": "Hiligaynon", "ext": "hil" }, { "name": "Hiri Motu", "ext": "hmo" }, { "name": "Hmoob", "ext": "hmn" }, { "name": "Hrvatski", "ext": "hrv" }, { "name": "Igbo", "ext": "ibo" }, { "name": "Ilokano", "ext": "ilo" }, { "name": "isiNdebele", "ext": "nbl" }, { "name": "Íslenska", "ext": "isl" }, { "name": "Italiano", "ext": "ita" }, { "name": "Kahs Kosrae", "ext": "kos" }, { "name": "Kajin Majōl", "ext": "mah" }, { "name": "Kichwa", "ext": "qvi" }, { "name": "Kikamba", "ext": "kam" }, { "name": "Kinyarwanda", "ext": "kin" }, { "name": "Kiribati", "ext": "gil" }, { "name": "Kiswahili", "ext": "swa" }, { "name": "ko e vagahau Niuē", "ext": "niu" }, { "name": "Kreyòl Ayisyen", "ext": "hat" }, { "name": "Latviešu", "ext": "lav" }, { "name": "Lietuvių", "ext": "lit" }, { "name": "Lingála", "ext": "lin" }, { "name": "maayaʼ tʼàan", "ext": "yua" }, { "name": "Magyar", "ext": "hun" }, { "name": "Mahsen en Pohnpei", "ext": "pon" }, { "name": "Malagasy", "ext": "mlg" }, { "name": "Malti", "ext": "mlt" }, { "name": "Mam", "ext": "mam" }, { "name": "Māori Kuki Airani", "ext": "rar" }, { "name": "Nederlands", "ext": "nld" }, { "name": "Nivacle", "ext": "cag" }, { "name": "Norsk", "ext": "nor" }, { "name": "Palauan", "ext": "pau" }, { "name": "Pampango", "ext": "pam" }, { "name": "Pangasinan", "ext": "pag" }, { "name": "Papiamento", "ext": "pap" }, { "name": "Polski", "ext": "pol" }, { "name": "Português (Brasil)", "ext": "por" }, { "name": "Português (Portugal)", "ext": "ept" }, { "name": "Q'eqchi'", "ext": "kek" }, { "name": "Quechua-Bolivia", "ext": "quh" }, { "name": "Quiché", "ext": "quc" }, { "name": "Reo Tahiti", "ext": "tah" }, { "name": "Română", "ext": "ron" }, { "name": "sePêdi", "ext": "nso" }, { "name": "Setswana", "ext": "tsn" }, { "name": "Shona", "ext": "sna" }, { "name": "Shqip", "ext": "alb" }, { "name": "Slovenčina", "ext": "slk" }, { "name": "Slovenščina", "ext": "slv" }, { "name": "South Sotho", "ext": "sot" }, { "name": "Suomi", "ext": "fin" }, { "name": "Svenska", "ext": "swe" }, { "name": "Tagalog", "ext": "tgl" }, { "name": "Te Reo Māori", "ext": "mri" }, { "name": "Thin Nu Wa'ab", "ext": "yap" }, { "name": "Tiếng Việt", "ext": "vie" }, { "name": "Tok Pisin", "ext": "tpi" }, { "name": "Tshiluba", "ext": "lua" }, { "name": "Türkçe", "ext": "tur" }, { "name": "Twi", "ext": "twi" }, { "name": "Vosa vakaviti", "ext": "fij" }, { "name": "Waray", "ext": "war" }, { "name": "Xhosa", "ext": "xho" }, { "name": "Yunkay Quechua", "ext": "quz" }, { "name": "Zulu", "ext": "zul" }, { "name": "Ελληνικά", "ext": "ell" }, { "name": "Български", "ext": "bul" }, { "name": "Қазақ", "ext": "kaz" }, { "name": "Македонски", "ext": "mkd" }, { "name": "Монгол", "ext": "mon" }, { "name": "Русский", "ext": "rus" }, { "name": "Српски", "ext": "srp" }, { "name": "Українська", "ext": "ukr" }, { "name": "ქართული", "ext": "kat" }, { "name": "Արեւմտահայերէն", "ext": "hyw" }, { "name": "Հայերեն", "ext": "hye" }, { "name": "اردو", "ext": "urd" }, { "name": "العربية", "ext": "ara" }, { "name": "فارسی", "ext": "pes" }, { "name": "አማርኛ", "ext": "amh" }, { "name": "नेपाली", "ext": "nep" }, { "name": "हिन्दी, हिंदी", "ext": "hin" }, { "name": "বাংলা", "ext": "ben" }, { "name": "தமிழ்", "ext": "tam" }, { "name": "తెలుగు", "ext": "tel" }, { "name": "ಕನ್ನಡ", "ext": "kan" }, { "name": "සිංහල", "ext": "sin" }, { "name": "ภาษาไทย", "ext": "tha" }, { "name": "ພາສາລາວ", "ext": "lao" }, { "name": "ကညီလံာ်ခီၣ်ထံ", "ext": "ksw" }, { "name": "ဗမာစာ", "ext": "mya" }, { "name": "ភាសាខ្មែរ", "ext": "khm" }, { "name": "한국어", "ext": "kor" }, { "name": "中文", "ext": "zho" }, { "name": "日本語", "ext": "jpn" }, { "name": "简体中文", "ext": "zhs" }, { "name": "繁體中文 - 廣東話", "ext": "yue" } ]`;
const languages = JSON.parse(languages_json);
let selects = Array.from(document.querySelectorAll('select'));

let options = languages.map(lang => `<option value="${lang.ext}">${lang.name}</option>`)
let blank_option = `<option value=""></option>`

selects.forEach((select, i) => {
    select.innerHTML = blank_option + options;
    if(i === 0) {
        select.value = 'jpn'
    }
})

const view = document.querySelector('#view');

view.addEventListener('click', e => {
    const match = window.location.href.match(/([\s\S]+)\?[\s\S]/);
    alert(window.location.href)
    let selected_langs = selects.filter(select => {
        return match[0] + '?lang=' + select.value;
    });
    alert(selected_langs.toString());

    // send those languages to the background to create windows
    // let num_languages = selected_langs.length;
    // let configs = [];
    // if (num_languages === 2) {
    //     configs = [
    //         {
    //             url: 'https://www.churchofjesuschrist.org/study?lang=',
    //             height: screen.height,
    //             width: screen.width / 2,
    //             left: 0,
    //             top: 0,
    //             type: "normal"
    //         },
    //         {
    //             url: 'https://www.churchofjesuschrist.org/study?lang=',
    //             height: screen.height,
    //             width: screen.width / 2,
    //             left: screen.width / 2,
    //             top: 0,
    //             type: "normal"
    //         }
    //     ]
    // } else if (num_languages === 3) {
    //     configs = [
    //         {
    //             url: 'https://www.churchofjesuschrist.org/study?lang=',
    //             height: screen.height,
    //             width: screen.width / 3,
    //             left: 0,
    //             top: 0,
    //             type: "normal"
    //         },
    //         {
    //             url: 'https://www.churchofjesuschrist.org/study?lang=',
    //             height: screen.height,
    //             width: screen.width / 3,
    //             left: screen.width / 3,
    //             top: 0,
    //             type: "normal"
    //         },
    //         {
    //             url: 'https://www.churchofjesuschrist.org/study?lang=',
    //             height: screen.height,
    //             width: screen.width / 3,
    //             left: (screen.width / 3) * 2,
    //             top: 0,
    //             type: "normal"
    //         },
    //     ]

    // } else {
    //     alert('You must choose at least 2 languages')
    // }

    if (!selected_langs.length) {
        alert('You must choose at least 2 languages')
        return;
    }
    chrome.runtime.sendMessage({ msg: 'get-langs', langs: selected_langs }, response => {
        console.log(response.langs);
    });
})

// setTimeout(() => {
//     view.click();
// }, 10);
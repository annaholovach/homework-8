// завдання 1

function check(str) {
    return /^[A-Z]/.test(str) ? "String's starts with uppercase character" : "String's not starts with uppercase character";
};

console.log(check('nya tfvgvj'));

// завдання 2

function validateEmail(str) {
    return /\w+\@\w+\.+\w+/.test(str);
};

console.log(validateEmail("Qmail2@gmail.com"));

// завдання 3

function change(str){
    let regex = /(.*?)\s(.*?)$/;
    return str.replace(regex, "$2 $1");
};

console.log(change("Java Script"));

// завдання 4

function validate(str) {
    return /\d{4}\S\d{4}\S\d{4}\S\d{4}/.test(str);
};

console.log(validate('9999999999999999'));

// завдання 5

function checkEmail(str) {
    return /^[a-z]\w+(-*?)(_*?)\@\w+\.+\w+/i.test(str) ? 'Email is correct!' : 'Email is not correct!';
};

console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));

// завдання 6

function checkLogin(login) {
    const loginRegex = /^\D\w.{2,10}$/;
    const numberRegex = /\d+(?:\.\d+)?/g;
    return {
        isValid: loginRegex.test(login),
        numbers: login.match(numberRegex) || [],
    };
};

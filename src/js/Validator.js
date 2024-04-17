class Validator {
    validateUsername(username) {
        const validUsernameRegex = /^[a-zA-Z0-9_-]{3,16}[a-zA-Z]$/;
        const consecutiveDigitsRegex = /\d{4}/;
        const startsOrEndsWithInvalidCharsRegex = /^[\d_-].*|.*[\d_-]$/;

        // Проверяем допустимость символов и длины имени
        if (!validUsernameRegex.test(username)) {
            return false;
        }

        // Проверяем наличие более трех цифр подряд
        if (consecutiveDigitsRegex.test(username)) {
            return false;
        }

        // Проверяем начало или конец имени на цифры, подчёркивания или тире
        if (startsOrEndsWithInvalidCharsRegex.test(username)) {
            return false;
        }

        // Если все проверки пройдены, имя пользователя допустимо
        return true;
    }


    cleanPhoneNumber(phoneNumber) {
        let cleanedNumber = phoneNumber.replace(/\D/g, ''); // Удаляем все нечисловые символы
        // Проверяем и приводим к формату +7xxxxxxxxxx
        if (cleanedNumber.length === 11 && cleanedNumber.startsWith('8')) {
            cleanedNumber = '7' + cleanedNumber.slice(1); // Заменяем '8' на '7'
        }
        return `+${cleanedNumber}`;
    }
}

module.exports = Validator;
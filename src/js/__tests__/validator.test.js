import Validator from '../Validator';

describe('Validator', () => {
    const validator = new Validator();

    describe('#validateUsername()', () => {
        it('should return true for valid usernames', () => {
            expect(validator.validateUsername('john_doe')).toBe(true);
        });

        it('should return false for invalid usernames', () => {
            expect(validator.validateUsername('user123')).toBe(false); // Содержит более трех цифр подряд
            expect(validator.validateUsername('name-')).toBe(false);   // Заканчивается символом тире
            expect(validator.validateUsername('123name')).toBe(false); // Начинается с цифры
            expect(validator.validateUsername('too_long_username_123')).toBe(false); // Слишком длинное имя
        });
    });

    describe('#cleanPhoneNumber()', () => {
        it('should clean and format phone numbers correctly', () => {
            expect(validator.cleanPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
            expect(validator.cleanPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
            expect(validator.cleanPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
        });
    });
});
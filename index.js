const validate = require("@takadotdev/validator");
class Validator extends validate {
    is_Phone(number, min_length) {
        const phoneRegex = /^\+?[0-9\s-]+$/;
        return number.length >= min_length && phoneRegex.test(number);
    }
    is_Email(email) {
        return this.isEmail(email);
    }
}

module.exports = Validator

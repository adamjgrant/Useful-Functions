export const hd = ({
    hexaduadec_digits_of_randomness_to_add = 0, 
    additional_sequence = "",
    seed = Date.now() - 1635743663677
  } = {}) => {
    const digits = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const calculate_hexaduadecimal = (base10_number, hexaduadecimal = "") => {
        let modulo = base10_number % digits.length;
        let multiples = Math.floor(base10_number / digits.length);

        if (multiples > 0) {
            const tail_digit = `${digits[modulo]}${hexaduadecimal}`;
            let preceding;
            if (multiples >= digits.length) {
                return calculate_hexaduadecimal(multiples, tail_digit);
            } else {
                preceding = digits[multiples];
            }
            hexaduadecimal = `${preceding}${tail_digit}`;
        } else { hexaduadecimal = digits[modulo]; }

        return hexaduadecimal;
    }

    // Get a random hexaduadec number of the specified length 
    // between (e.g. length = 2) 0 and ZZ
    let randomness_to_add;
    if (hexaduadec_digits_of_randomness_to_add > 0) {
    const highest_n_digit_number = digits.length ** hexaduadec_digits_of_randomness_to_add - 1;
    const lowest_number = 0;
    const rand = ((max, min) => {
        return Math.floor(Math.random() * (max - min) + min)
    })(highest_n_digit_number, lowest_number);
    randomness_to_add = calculate_hexaduadecimal(rand).padStart(hexaduadec_digits_of_randomness_to_add, "0");
    }
    else {
    randomness_to_add = "";
    }

    return `${calculate_hexaduadecimal(seed)}${randomness_to_add}${additional_sequence}`;
}
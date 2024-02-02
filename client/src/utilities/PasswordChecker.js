export const PasswordChecker = (password) => {
  if (!password || password.length < 8) {
    return false;
  }
  let lower = 0,
    upper = 0,
    specialCharacter = 0,
    digit = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    if (char >= "0" && char <= "9") {
      digit++;
    } else if (char >= "a" && char <= "z") {
      lower++;
    } else if (char >= "A" && char <= "Z") {
      upper++;
    } else if (
      char === "$" ||
      char === "@" ||
      char === "*" ||
      char === "#" ||
      char === "-"
    ) {
      specialCharacter++;
    }
  }
  if (upper >= 2 && lower >= 2 && digit >= 1 && specialCharacter >= 1) {
    return true;
  } else return false;
};

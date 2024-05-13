const generatePassword = require('generate-password');

const generateRandomPassword = () => {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
  console.log('Generated password:', password);
};

generateRandomPassword();

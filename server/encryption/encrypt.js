// run using NodeJS only
const CryptoJS = require("crypto-js");
const fs = require("fs");
require("dotenv").config();

const filePath = ''
const targetFile = 'story.json'
const completePath = filePath + targetFile
const encryptCompletePath = completePath + '.enc'

const jsonData = fs.readFileSync(completePath, "utf8");

const passKey = process.env.NEXT_PUBLIC_PASS_KEY;
const cipherKey = CryptoJS.AES.encrypt(jsonData, passKey).toString();

fs.writeFileSync(encryptCompletePath, cipherKey);
console.log('Encrypted and saved to: ' + encryptCompletePath);

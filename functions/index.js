import { prompt } from "./prompt.js";

const getPasswordLength = () => {
  let question = Number(prompt("🔢 Combien de caractères ? (8-36)"))

  try {
    while (!(question >= 8 && question <= 36)) {
      question = Number(prompt("🔢 Combien de caractères ? (8-36)"))
    }
  } catch (error) {
    return console.log("Une erreur est survenue : ", error.name)
  }

  return passwordLength = question
}

const setIsSpecial = () => {
  let question = prompt("🔣 Caractères spéciaux ? (y/n)")

  try {
    while (!(question === 'y' || question === 'n' || question === 'Y' || question === 'N')) {
      question = prompt("🔣 Caractères spéciaux ? (y/n)")
    }
  } catch (error) {
    return console.log("Une erreur est survenue : ", error.name)
  }

  if (question === 'n' || question === 'N') {
    return isSpecial = false;
  }

  return isSpecial = true;
}

const setIsNumbered = () => {
  let question = prompt("🔢 Chiffres ? (y/n)")
  try {
    while (!(question === 'y' || question === 'n' || question === 'Y' || question === 'N')) {
      question = prompt("🔢 Chiffres ? (y/n)")
    }
  } catch (error) {
    return console.log("Une erreur est survenue : ", error.name)
  }

  if (question === 'n' || question === 'N') {
    return isNumbered = false;
  }

  return isNumbered = true;
}

const setIsUppercased = () => {
  let question = prompt("⬆️ Majuscules ? (y/n)")
  try {
    while (!(question === 'y' || question === 'n' || question === 'Y' || question === 'N')) {
      question = prompt("⬆️ Majuscules ? (y/n)")
    }
  } catch (error) {
    return console.log("Une erreur est survenue : ", error.name)
  }

  if (question === 'n' || question === 'N') {
    return isUppercased = false;
  }

  return isUppercased = true;
}

const generatePassword = (passwordLength, isSpecial, isNumbered, isUppercased )=>{
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const special = '!@#$%^&*()'
  const number = '0123456789'
  let charset = lowercase
  isSpecial ? charset += special : ''
  isNumbered ? charset += number : ''
  isUppercased ? charset += uppercase : ''
  let password = ""

  for (let i =0; i<passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex]
  }

  return console.log(password)
}

let passwordLength;
let isSpecial;
let isNumbered;
let isUppercased;

getPasswordLength()
setIsSpecial()
setIsNumbered()
setIsUppercased()
generatePassword(passwordLength, isSpecial, isNumbered, isUppercased)

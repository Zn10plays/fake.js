import data from './data.json'

class Manager {
  static get getRandomFirstName(): String {
    const fNames = data.firstNames
    return fNames[Math.floor(Math.random() * fNames.length)]
  }
  static get getRandomLastName(): String {
    const lNames: String[] = data.lastName
    return lNames[Math.floor(Math.random() * lNames.length)]
  }
  static get getRandomNumber(opt: {style: boolean}): String | number {
    let length: number = 8,
      charset: String = "1234567890",
      retVal: String = "";
    
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    if (opt.style) {
      return '+1 ('+ retVal.slice(0, 3) + ')  ' + retVal.slice(3, 6) + ' - ' + retVal.slice(6, 10)
    }
    return retVal;
  }

  static get getRandomPassword(opt: {length: number, number: boolean, letters: boolean, specialCharacters: String[]}) {
    
  }
}


export default Manager
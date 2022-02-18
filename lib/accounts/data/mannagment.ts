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
}

export default Manager
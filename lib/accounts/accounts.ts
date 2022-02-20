import randInfo from './data/managment'

class randAccount {
  phonenumber: string
  firstName: string
  lastName: string
  password: string
  email: string

  constructor () {
    this.firstName = randInfo.randomFirstName()
    this.lastName = randInfo.randomLastName()
    this.phonenumber = randInfo.randomNumber({ style: false })
  }
}

export default randAccount

import * as data from './data.json'

function randomFirstName (): string {
  const fNames = data.firstNames
  return fNames[Math.floor(Math.random() * fNames.length)]
}

function randomLastName (): string {
  const lNames: string[] = data.lastName
  return lNames[Math.floor(Math.random() * lNames.length)]
}

function randomNumber (opt: {style: boolean } | null): string {
  const length: number = 10
  const charset: string = '1234567890'
  const retVal: string[] = []

  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal.push(charset.charAt(Math.floor(Math.random() * n)))
  }

  const numstr = retVal.join('')
  if (opt !== null ? opt?.style : false) {
    return '+1 (' + numstr.slice(0, 3) + ') ' + numstr.slice(3, 6) + ' - ' + numstr.slice(6, 10)
  }
  return retVal.join('')
}

function randomPassword (opt: {length: 8, number: false, capital: true, specialCharacters: string[]}): string {
  let pass: string = ''
  const nums: string = '1234567890'
  let characters: string = 'qwertyuiopasdfghjklzxcvbnm'
  const capitals: string = 'QWERTYUIOOPAsDFGHJKLZXCVBNM'

  let len: number = 8

  if (opt !== null) {
    if (opt?.capital) {
      characters += capitals
    }
    if (opt?.number) {
      characters += nums
    }
    if (typeof opt?.length === 'number') {
      len = opt.length
    }
  }

  for (let i = 0, n = characters.length; i < len; ++i) {
    pass += characters.charAt(Math.floor(Math.random() * n))
  }
  return pass
}

function randomEmail() {
  return randomFirstName() + ''+ randomLastName() + '@gamil.com'
}

const exp = { randomFirstName, randomLastName, randomNumber, randomPassword, randomEmail }

export default exp

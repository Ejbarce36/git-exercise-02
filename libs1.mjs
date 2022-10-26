export function square(n) {
  return (n * n)
}

export function fahrenhiet(celsius) {
  return celsius * 1.8 + 32
}

export function recrangleArea(a, b) {
  return a * b
}

export function isPalindrome(str) {
  // eslint-disable-next-line no-param-reassign
  str = str.toLowerCase()

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

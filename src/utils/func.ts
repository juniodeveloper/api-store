const character = 'QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgHhJjKkLlZzXxCcVvBbNnMm'

export const fileName = (max: number) => {

  let charGenerate = ''
  for (let i = 0; i < max; i++) {
    charGenerate += character.charAt(Math.floor(Math.random() * max))
  }
  return charGenerate
}

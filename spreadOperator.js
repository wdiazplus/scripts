function join_words(word_x, word_y) {
  return `${word_x} ${word_y}`;
}
const list = ['Hola', 'Twitter'];

console.log(join_words(...list));

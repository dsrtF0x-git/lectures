function getDiscriminant() {
  return a => b => c => b ** 2 - 4 * a * c;
}

const discriminant = getDiscriminant();
console.log( discriminant(1)(-8)(7) );
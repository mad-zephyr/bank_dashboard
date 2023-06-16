export function generateRandom(maxLimit = 5) {
  let rand = Math.random() * maxLimit;

  rand = Math.floor(rand); // 99

  return rand;
}

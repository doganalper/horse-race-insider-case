export function shuffleArray<T extends any[]>(arr: T) {
  let currentIndex = arr.length;
  let randomIndex;

  // While there are elements remaining to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the current element with the random element
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

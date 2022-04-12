const arrayRange = (start: number, end: number) => Array.from(Array(end - start + 1)).map((_, index) => index + start);

export default arrayRange;

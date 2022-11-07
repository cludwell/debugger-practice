/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/
debugger
function cutestCat(cats) {
  let thelastcat = cats[cats.length-1];
  let i = 0;
debugger
  while (i < cats.length) {
    let cat = cats[i];
    debugger;
    if (cat.cuteness > thelastcat.cuteness) {
      thelastcat = cat;

    }
    i++;
  }
debugger
  return thelastcat;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }

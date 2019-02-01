function countBy(items) {
  let counts = [];
  for (let item of items) {
    let known = counts.findIndex(c => c.direction == item.direction);
    if (known == -1) {
      counts.push({direction: item.direction, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
console.log(countBy(SCRIPTS));

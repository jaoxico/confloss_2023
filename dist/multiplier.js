const times = 3;
const result = new Array(times).fill([], 0, times);
result.forEach((item, position) => {
    item = new Array(times).fill(null);
    item.forEach((_, subPosition) => {
        item[subPosition] = (position + 1) * (subPosition + 1);
    });
    result[position] = item;
});
console.log(result);
//# sourceMappingURL=multiplier.js.map
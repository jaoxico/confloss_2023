// Times would be the given number
var times = 8;
var result = new Array(times).fill(new Array(times).fill(null), 0, times);
result.forEach(function (item, position) {
    item.forEach(function (_, subPosition) {
        item[subPosition] = (position + 1) * (subPosition + 1);
    });
    result[position] = item;
});
console.log(result);

// Times would be the given number
const times: number = 3;

const result: Array<Array<number>> = new Array(times).fill([], 0, times);
result.forEach((item: Array<number>, position: number) => {
    item = new Array(times).fill(null);
    item.forEach((_: number, subPosition: number) => {
        item[subPosition] = (position+1) * (subPosition+1)
    });
    result[position] = item;
})
console.log(result);
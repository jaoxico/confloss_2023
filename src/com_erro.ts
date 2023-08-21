const multiplier: number = 5;
for (let position: number = 0; position <= 100; position = `${(++position) * multiplier}`) {
    console.log(position);
}


let numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i: number =0; i< numbers.length; i++){
    if (numbers[i] > 5){
        break
    }
    else if (numbers[i]===3){
        continue
    }
}
const sum =(a: number, b: number): number => a+b;
sum (2, 4);


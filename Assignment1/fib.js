export default function fibs(number) {
    let seq  = [0, 1]
    
    for (let i = 0; i < number - 2; i++) {
        let last = seq.length - 1;
        let secondLast = seq.length - 2;
        let nextNum = seq[last] + seq[secondLast];
        seq.push(nextNum);
    }

    return seq;
}

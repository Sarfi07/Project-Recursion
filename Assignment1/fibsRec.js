export default function fibsRec(n, current=0, next=1, result=[]) {
    if (n == 0) return result;

    result.push(current);
    return fibsRec(n-1, next, current+next, result);
}


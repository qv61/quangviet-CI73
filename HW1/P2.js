const arr = ['hanoi', 'danang', 'hcm', 'hanoi'];
const unique = arr => {
    const newArr = [...new Set(arr)];
    return newArr;
}

console.log(unique(arr));

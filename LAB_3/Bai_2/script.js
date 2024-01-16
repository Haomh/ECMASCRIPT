var arr = [1, 2, 3, 4, 5, 6, 7];

// Sử dụng arrow function để tính tổng các phần tử trong mảng
const sumArray = (arr) => arr.reduce((acc, current) => acc + current, 0);

// In ra kết quả
console.log(sumArray(arr)); //28

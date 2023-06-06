const jsc = require('jsverify');

// Hàm tính tổng các số trong một mảng
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Định nghĩa thuộc tính giả định
const arraySumProperty = jsc.forall(jsc.array(jsc.number), arr => {
  const expectedSum = arr.reduce((sum, num) => sum + num, 0);
  const actualSum = sumArray(arr);
  return actualSum === expectedSum;
});

// Tạo bộ dữ liệu kiểm thử tự động
const testConfig = { tests: 10 }; // Số lượng test cases
jsc.assert(arraySumProperty, testConfig);

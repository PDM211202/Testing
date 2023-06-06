function generateTestCases(numTestCases) {
    const testCases = [];

    for (let i = 0; i < numTestCases; i++) {
        const a = getRandomNumber(-10, 10); // Sinh số ngẫu nhiên trong khoảng từ -10 đến 10
        const b = getRandomNumber(-10, 10); // Sinh số ngẫu nhiên trong khoảng từ -10 đến 10

        const expectedResult = getExpectedResult(a, b);

        testCases.push({
            input: [a, b],
            output: expectedResult
        });
    }

    return testCases;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getExpectedResult(a, b) {
    if (a == 0 && b == 0) {
        return 'Phương trình vô số nghiệm';
    } else if (a != 0 && b == 0) {
        return 'Phương trình có nghiệm x = 0';
    } else if (a == 0 && b != 0) {
        return "Phương trình vô nghiệm";
    } else {
        return 'Phương trình có nghiệm x = ' + (-b / a);
    }
}

// Sử dụng hàm generateTestCases để tạo bộ dữ liệu kiểm thử
const testCases = generateTestCases(10); // Tạo 10 bộ dữ liệu kiểm thử

// In ra bộ dữ liệu kiểm thử
testCases.forEach((testCase, index) => {
    console.log(`Test case ${index + 1}:`);
    console.log(`Input: a = ${testCase.input[0]}, b = ${testCase.input[1]}`);
    console.log(`Expected Output: ${testCase.output}`);
    console.log('--------------------');
});

// Hàm lấy giá trị 2 số từ form
function getNumbers() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    return { a, b };
}

// 1. Hàm cộng
function addition() {
    let { a, b } = getNumbers();
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }
    document.getElementById("result").innerText = "Result Addition: " + (a + b);
}

// 2. Hàm trừ
function subtraction() {
    let { a, b } = getNumbers();
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }
    document.getElementById("result").innerText = "Result Subtraction: " + (a - b);
}

// 3. Hàm nhân
function multiplication() {
    let { a, b } = getNumbers();
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }
    document.getElementById("result").innerText = "Result Multiplication: " + (a * b);
}

// 4. Hàm chia
function division() {
    let { a, b } = getNumbers();
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }
    if (b === 0) {
        document.getElementById("result").innerText = "Không thể chia cho 0!";
        return;
    }
    document.getElementById("result").innerText = "Result Division: " + (a / b);
}
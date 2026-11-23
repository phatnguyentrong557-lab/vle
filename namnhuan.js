function kiemTraNamNhuan() {
    // Bước 2: Nhập dữ liệu từ bàn phím
    let year = parseInt(prompt("Nhập vào năm cần kiểm tra:"));

    // Kiểm tra người dùng có nhập số hợp lệ không
    if (isNaN(year)) {
        alert("Vui lòng nhập một số năm hợp lệ!");
        return;
    }

    // Bước 3: Phân loại và hiển thị kết quả (dùng cách kết hợp điều kiện tối ưu trong sách)
    let isLeapYear = false;
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        isLeapYear = true;
    }

    if (isLeapYear) {
        alert(year + ": năm nhuận");
    } else {
        alert(year + ": năm không nhuận");
    }
}

// Tự động chạy ngay khi mở trang web
kiemTraNamNhuan();
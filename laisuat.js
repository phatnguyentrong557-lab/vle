function tinhLaiSuat() {
    // Nhập dữ liệu đầu vào từ bàn phím
    let tienVay = parseFloat(prompt("Nhập số tiền vay (triệu đồng):"));
    let laiSuat = parseFloat(prompt("Nhập lãi suất (% / năm):"));
    let soNam = parseInt(prompt("Nhập số năm (n):"));

    // Kiểm tra dữ liệu hợp lệ
    if (isNaN(tienVay) || isNaN(laiSuat) || isNaN(soNam) || tienVay <= 0 || laiSuat < 0 || soNam <= 0) {
        alert("Vui lòng nhập đầy đủ các thông số hợp lệ!");
        return;
    }

    // Tính tiền lãi 1 năm và tổng tiền cả gốc lẫn lãi sau n năm theo công thức lãi đơn
    let tienLaiMotNam = tienVay * (laiSuat / 100);
    let tongTienPhaiTra = tienVay + soNam * tienLaiMotNam;

    // Hiển thị kết quả
    alert(
        "Số tiền vay ban đầu: " + tienVay + " triệu đồng\n" +
        "Tiền lãi mỗi năm (" + laiSuat + "%): " + tienLaiMotNam + " triệu đồng\n" +
        "Tổng số tiền phải trả sau " + soNam + " năm: " + tongTienPhaiTra + " triệu đồng"
    );
}

// Tự động chạy khi mở trang web
tinhLaiSuat();
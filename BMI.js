function tinhBMI() {
    // Lấy giá trị từ ô nhập và chuyển sang kiểu số thực
    let canNang = parseFloat(document.getElementById("weight").value);
    let chieuCaoCm = parseFloat(document.getElementById("height").value);
    let resultBox = document.getElementById("result-box");

    // Kiểm tra dữ liệu hợp lệ
    if (isNaN(canNang) || isNaN(chieuCaoCm) || canNang <= 0 || chieuCaoCm <= 0) {
        resultBox.innerHTML = "Vui lòng nhập cân nặng và chiều cao hợp lệ!";
        return;
    }

    // Đổi chiều cao từ cm sang mét
    let chieuCaoM = chieuCaoCm / 100;

    // Tính chỉ số BMI và làm tròn 2 chữ số thập phân
    let bmi = canNang / (chieuCaoM * chieuCaoM);
    let bmiLamTron = bmi.toFixed(2);
    let phanLoai = "";

    // Phân loại tình trạng sức khỏe theo hướng dẫn trong sách
    if (bmi >= 40) {
        phanLoai = "Béo phì cấp độ III";
    } else if (bmi >= 35) {
        phanLoai = "Béo phì cấp độ II";
    } else if (bmi >= 30) {
        phanLoai = "Béo phì cấp độ I";
    } else if (bmi >= 25) {
        phanLoai = "Thừa cân";
    } else if (bmi >= 18.5) {
        phanLoai = "Bình thường";
    } else if (bmi >= 17) {
        phanLoai = "Gầy cấp độ I";
    } else if (bmi >= 16) {
        phanLoai = "Gầy cấp độ II";
    } else {
        phanLoai = "Gầy cấp độ III";
    }

    // Hiển thị kết quả
    resultBox.innerHTML = `Chỉ số BMI của bạn là: <strong>${bmiLamTron}</strong><br>Tình trạng: <strong>${phanLoai}</strong>`;
}
// 1. Hộp thoại thông báo thành công
function fireSweetAlertSuccess() {
    Swal.fire({
        icon: 'success',
        title: 'Thành công!',
        text: 'Thêm mới sản phẩm thành công!'
    });
}

// 2. Hộp thoại thông báo thông tin
function fireSweetAlertInfo() {
    Swal.fire({
        icon: 'info',
        title: 'Thông báo',
        text: 'Chúc mừng bạn được 10 điểm!'
    });
}

// 3. Hộp thoại thông báo lỗi
function fireSweetAlertError() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
    });
}

// 4. Hiển thị hộp thoại tại vị trí tùy chọn
function showAlertTopEnd() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Display this alert in top right corner',
        showConfirmButton: false,
        timer: 2500
    });
}

// 5. Hộp thoại xác nhận
function showDialogWithPassingParams() {
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
        }
    });
}
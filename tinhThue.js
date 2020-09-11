function tongTN() {
    let a = parseInt(document.getElementById("thuNhap").value);
    let b = parseInt(document.getElementById("bacLuong").value);

    if (a < 10) {
        document.getElementById("tongThuNhap").innerHTML = "không chịu thuế";
    } else if (a >= 10 && a < 50) {
        switch (b) {
            case 1:
                document.getElementById("tongThuNhap").innerHTML = (0.9 * 12 * a) - (0.9 * 12 * a) * 0.1 / 4 - (0.9 * 12 * a) * 0.2 / 4;
                break;
            case 2:
                document.getElementById("tongThuNhap").innerHTML = (0.9 * 12 * a) * 0.9 - (0.9 * 12 * a) * 0.1 / 4 - (0.9 * 12 * a) * 0.2 / 2;
                break;
        }
    } else {
        switch (b) {
            case 1:
                document.getElementById("tongThuNhap").innerHTML = (0.8 * 12 * a)*0.9 - (0.8 * 12 * a)*0.9 * 0.1 / 4 - (0.8 * 12 * a)*0.9 * 0.2 / 4;
                break;
            case 2:
                document.getElementById("tongThuNhap").innerHTML = (0.8 * 12 * a) * 0.9 - (0.8 * 12 * a)*0.9 * 0.1 / 4 - (0.8 * 12 * a)*0.9 * 0.2 / 2;
                break;
        }
    }
}

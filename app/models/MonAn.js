
// tao lop doi tuong mon an trong ES6
class MonAn {
    //maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, image, description
    foodID = "";
    tenMon = "";
    loai = "";
    giaMon = "";
    khuyenMai = "";
    tinhTrang = "";
    hinhMon = "";
    moTa = "";
    // phuong thuc
    tinhGiaKhuyenMai = () => {
     return ( this.giaMon * (100 - this.khuyenMai)) / 100
    }

}

export default MonAn;
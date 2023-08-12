import MonAn from "./MonAn.js";
// import MonAn  from "./MonAn.js";
class Menu {
  // se la noi chua mang tat ca cac mon an va cac phuong thuc xu ly vs mang do
  arrMonAn = [];

  // themMonAn. render mon an len giao dien, xoa mon an, cap nhat mon an, luu xuong local va goi du lieu tu local len, tim kiem va loc theo yeu cau

  //THEM MON AN
  themMonAn = (monAn) => {
    this.arrMonAn.push(monAn);
    this.renderMonAn();
    this.luuXuongLocalStorage();
  };
  //  render du lieu, default parameter
  renderMonAn = (arr = this.arrMonAn) => {
    // lay dc object
    // dung destrucring
    let content = "";
    for (let i = 0; i < arr.length; i++) {
      let monAn = new MonAn();
      // console.log(arr[i]);
      // monAn ={...monAn, ... arr[i]}
      Object.assign(monAn, arr[i]);

      // console.log(monAn);
      let {
        foodID,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        tinhGiaKhuyenMai,
      } = monAn;
      content += `
            
<tr>
<td>${foodID}</td>
<td>${tenMon}</td>
<td>${loai == "loai1" ? "Chay" : "Mặn"}</td>
<td>${giaMon}</td>
<td>${khuyenMai}%</td>
<td>${tinhGiaKhuyenMai()}</td>
<td>${tinhTrang == "0" ? "Hết" : "Còn"}</td>
<td>
<button class="btn btn-danger"  onclick='xoaMonAn("${foodID}")'>Xoa</button>
<button class="btn btn-warning"  onclick='suaMonAn("${foodID}")'>Sua</button>
</td>
</tr>

`;
    }
    document.getElementById("tbodyFood").innerHTML = content;
  };
  // class Menu {
  // luu xuong local
  luuXuongLocalStorage = () => {
    // chuyen mang thanh chuoi Json
    let chuoiJson = JSON.stringify(this.arrMonAn);
    localStorage.setItem("arrMonAn", chuoiJson);
  };
  // lay tu local len
  layTuLocalStorage = () => {
    // goi du lieu tu local len
    let arrMonAn = localStorage.getItem("arrMonAn");
    // parse chuoi json ve lai kieu du lieu ban dau
    //parse xong se gan gia ri vao ben trong arrMonAn cua lop doi tuong
    if (arrMonAn) {
      this.arrMonAn = JSON.parse(arrMonAn);
      this.renderMonAn();
    }
  };
  // phuong thuc xoa mang khoi mon an
  xoaMonAn = (id) => {
    // find index su dung vs arrow function
    console.log(this.arrMonAn);

    // find index==> timf ra dc vi tri index phan tu chung ta muon tim, // index la vi tri index trong mang// item la phan tu
    let index = this.arrMonAn.findIndex((item) => item.foodID == id);
    //VI DU VE FINDINEX
    // const array1 = [5, 12, 8, 130, 44];

    // const isLargeNumber = (element) => element > 13;

    // console.log(array1.findIndex(isLargeNumber));
    // Expected output: 3
    //  co 1 bieu thuc so sanh de tim ra dc item muon tim
    // th1: tim dc phan tu ma chung ta muon
    //th2: tim ko co phan tu do trong mang ==> index= -1
    if (index !== -1) {
      this.arrMonAn.splice(index, 1);
      this.renderMonAn(); // TRUONG HOP 1
      this.luuXuongLocalStorage();
    }
    //    this.arrMonAn.splice(id, 1)
  };

  // tim thong tin ng dung muon sua , sau do hien thi len form
  layThongTinMonAn = (id) => {
    //chay vong lap arrMonAn
    // dung id de xac dinh phan tu can lay
    let monAn = this.arrMonAn.find(function (item, index) {
      // ham find se giup lay ra phan tu thoa dk trong mang
      return item.foodID == id;
    });
    // th1: tim dc phhan tu chung ta muon, th2: ko co phan tu trong mang: undefined
    // sua khi ng dung chinh sua xong, lay het thong tin va update lai mon an do
    if (monAn) {
      return monAn;
    }
  };

  capNhatMonAn(monAn) {
    // tim vi tri index cua mon can sua, su dung findIndex
    let index = this.arrMonAn.findIndex((item) => item.foodID == monAn.foodID);
    if (index !== -1) {
      this.arrMonAn[index] = monAn;
      this.luuXuongLocalStorage();
      this.renderMonAn();
    }
  }
}

export default Menu;

/// MAN

// @ts-nocheck
// THEM MON AN
import MonAn from "./../models/MonAn.js";
import Menu from "./../models/Menu.js";

// tao 1 doi tuong menu tu lop doi tuong Menu
let menu = new Menu()
menu.layTuLocalStorage()
console.log(menu);

document.getElementById('foodForm').onsubmit = () => {
    // dung event.preventDefault()
    event.preventDefault();
    console.log('hello');
    // goi ra 1 doi tuong tu lop doi tuong 
    let monAn = new MonAn();
    console.log(monAn);
    // lay du lieu tu ng dung
    // vong lap de  di qua tung phan tu co trong mang
    //for .. in
    // lay tat ca cac input trong form co id la foodform
    let arrField = document.querySelectorAll('#foodForm input , #foodForm select , #foodForm textarea');// ==> tra ve mang
    console.log(arrField);
    // dung vong lap for of // dom toi nhung input, select va textarea
    for (let field of arrField) {
        console.log(field);
        // let value = field.value;
        // let id = field.id
        // dung destructuring
        let { value, id } = field;// == line 22 va 23
        //id la ten thuoc tinh dong, no co the di chuyen
        monAn[id] = value;
    }
    // .value .id
    console.log(monAn);
    // goi ra phuong thuc de them monAn vao mang
    menu.themMonAn(monAn);
    // for in : duyet qua tung ptu trong mang, nhung gia tri tra ve vi tri index
    // let arrNumber = [1,2,3,4 ]
    // for(let index in arrNumber){
    //     console.log(index);
    // }
    // for (let item of arrNumber){
    //     console.log(item); // phan tu trong mang
    // }
    // // for of tra ve tung phan tu co trong mang

}


// cách  đàu tiên khai báo cho 1 đối tượng window sự kiện xoá món ăn
window.xoaMonAn = function (id) {
    console.log(id);
    menu.xoaMonAn(id)
};
console.log(window);

window.suaMonAn = function (id) {
    console.log(id);
    // gọi tới đối tượng menu và lấy ra món ăn tìm kiếm
    let monAn = menu.layThongTinMonAn(id);
    // món ăn cần chỉnh sửa
    if (monAn) {
        // mở modal lên
        console.log(monAn);
        document.getElementById('btnThem').click();
        let arrField = document.querySelectorAll(
            '#foodForm input,#foodForm select, #foodForm textarea'
        );
        console.log(arrField);
        console.log(monAn);
        // for...of
        for (let item of arrField) {
            // input id là foodId
            // item là từng cái DOM tới các input, select và textarea
            item.value = monAn[item.id]; // item đại diện cho từng input... trong form, nên có thể bóc id từ item để xác định lấy dữ liệu từ thuộc tính nào trong đối tượng món ăn
        }

        // ngăn chặn người dùng không được chỉnh sửa mã món
        document.getElementById('foodID').readOnly = true;
    }
};

// cap nhat thog tin mon an
document.getElementById("btnCapNhat").onclick = () => {
    console.log('object');
    // lay du lieu tu ng dung ve 
    // tao ra 1 doi tuong mon an de luu tru du lieu ng dung da chinh sua
    let monAn = new MonAn();
    let arrField = document.querySelectorAll('#foodForm input,#foodForm select, #foodForm textarea');
    console.log(arrField);
    // for ... of:
    for (let item of arrField) {
        // goi lay ra id va value tu item, dai dien cho tung dom ben trong arrField
        let { id, value } = item;
        monAn[id] = value
    }
    console.log(monAn);
    menu.capNhatMonAn(monAn)
    document.querySelector('.modal-footer .btn-secondary').click()
    document.getElementById("foodForm").reset()
    document.getElementById("foodForm").readOnly = false
    // khi cap nhat xong nho tat modal, clear form de lan sau ko con du lieu do,
    // mo readOnly cho input foodID
};
// lọc món ăn dụa theo loại món

let selectElement = document.getElementById("loai");

selectElement.onchange = (event) => {
    console.log('ff');

    // dung event.target de dom toiw the co su kein onchange
    let { value } = event.target;
    let arrFilter = [];
    if (value == 'all') {
        arrFilter = menu.arrMonAn;
        console.log(arrFilter);
    } else {
        arrFilter = menu.arrMonAn.filter((item) => item.loai == value);
        console.log(arrFilter);
    };
    // neu nhu value = "all" thi se ko filter loc va lay tat ca
    // dung value de loc ra cac mon an theo ng dung muon, ham fileter se tra ve mang ms
    menu.renderMonAn(arrFilter);
}



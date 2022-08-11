// bài 1
// function tinhtong(so1, so2) {
//     let tong = so1 + so2;
//     return tong;
// }
// let so1 = Number(prompt("nhap di : "));
// let so2 = Number(prompt("nhap di : "));
// tong = tinhtong(so1, so2);
// console.log(tong);


// bai 2
// function tongLe(array) {
//     let tong = 0;
//     for (i = 0; i < array.length; i++);
//     if (array[i] % 2 === 1) {
//         tong = tong + tong[i];
//     }
//     return tong;
// }
// let array = [1, 2, 3, 4, 5, 6];
// let tong = tongLe(array);
// console.log(tong);

// bai  1 nho

// function tich(a){
//     let binhPhuong = a*a;
//     return binhPhuong;
// }
// let a = Number(prompt("nhap thoai mai : "))
// console.log(tich(a));

// bai 2

// function chuViHT(r){
//     return 3.14*2*r;
// }
// let r = Number(prompt("nhap thoai mai : "))
// console.log(chuViHT(r));
// function dienTichHT(r){
//     return 3.14*r*r;
// }
// console.log(dienTichHT(r));

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây
// dựng được.

// function tinhgiaiThua(x) {
//     let giaithua = 1;
//     if (x > 1) {
//         for (i = 1; i <= x; i++) {
//             giaithua = giaithua * i;
//         }
//         return giaithua;
//     }
//     else {
//         return `x phai la nguyen duong`;
//     }
// }
// let x = Number(prompt("nhap thoai mai : "));
// console.log(tinhgiaiThua(x));

// bai 4 : Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm
// trả về true, ngược lại trả về false.

// function kTra(user){
//     if (user%1===0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let user = prompt("nhap di : ");
// console.log(kTra(user));

// bai 5

// function min() {
//     let so1 = Number(prompt("nhap di,  nhanh len : "));
//     let so2 = Number(prompt("nhap di,  nhanh len : "));
//     let so3 = Number(prompt("nhap di,  nhanh len : "));
//     if (so1 > so2 && so1 > so3) {
//         min = so2;
//     } else if (so2 > so1 && so2 > so3) {
//         min = so1;
//     } else {
//         min = so3;
//     }
//     console.log(min);

// }
// min()

// Bài 6: Viết hàm nhận vào một số kiểm tra xem nếu số đưa vào có phải là nguyên dương
// không. Nếu là nguyên dương trả về true, ngược lại trả về false.

// function kTra(a){
//     if (a>0 && a%1===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let a = prompt("nhap di : ");
// console.log(kTra(a));

// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.


// function doiVitri() {
//     let a = 8;
//     let b = 5;
//     console.log("a trc khi doi: " + a);
//     console.log("b trc khi doi: " + b);
//     let tmp = a;
//     a = b;
//     b= tmp;
//     console.log("a sau khi doi: " + a);
//     console.log("b sau khi doi: " + b);
// }
// doiVitri();

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.

// let array = [1,2,3,4,5];
// array.reverse();
// console.log(array);

// array.sort(function(){
//     return -1;
// });


// array.sort(()=>-1);




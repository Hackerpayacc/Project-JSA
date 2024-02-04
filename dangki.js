const name1 = document.getElementById("name");
const email = document.getElementById("email");
const numberPhone = document.getElementById("phonenumber");
const pass = document.getElementById("pass");
const re_pass = document.getElementById("re-pass");
const resBtn = document.getElementById("btn-đk");
let acc = JSON.parse(localStorage.getItem("username")) || [];
// Hàm validate form Đăng ký
function validate() {
  let isVal = true;
  if (name1.value.trim() === "") {
    alert("Chưa nhập tên!!!");
    return (isVal = false);
  }
  if (email.value.trim() === "") {
    alert("Chưa nhập email!!!");
    return (isVal = false);
  }
  if (numberPhone.value === "") {
    alert("Chưa nhập số điện thoại!!!");
    return (isVal = false);
  }
  if (pass.value === "") {
    alert("Chưa nhập mật khẩu!!!");
    return (isVal = false);
  }
  if (re_pass.value === "") {
    alert("Vui lòng nhập lại mật khẩu!!!");
    return (isVal = false);
  }
  if (pass.value !== re_pass.value) {
    alert("Mật khẩu không khớp vui lòng nhập lại!!!");
    return (isVal = false);
  }
  return (isVal = true);
}
// Nut dang ky
resBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (validate()) {
    acc.push({
      email: email.value,
      phone: numberPhone.value,
      pass: pass.value,
    });
    localStorage.setItem("username", JSON.stringify(acc));
    alert("Đăng ký thành công!!!");
    window.location.href = "login/dangnhap.html";
  }
});

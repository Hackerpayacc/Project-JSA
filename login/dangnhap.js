const email = document.querySelector("#email");
const pass = document.getElementById("pass");
const btn_login = document.getElementById("btn-đk");
const acc = JSON.parse(localStorage.getItem("username")) || [];
//Ham validate form Login
function validate() {
  let isVal = true;
  if (email.value.trim() === "") {
    alert("Chưa nhập email!!!");
    return (isVal = false);
  }
  if (pass.value.trim() === "") {
    alert("Chưa nhập password!!!");
    return (isVal = false);
  }
  return (isVal = true);
}

btn_login.addEventListener("click", function (e) {
  e.preventDefault();
  if (validate()) {
    // Tìm tài khoản đã đăng ký trong đc lưu trong mảng acc
    let search = {};
    for (let i in acc) {
      if (acc[i].email === email.value && acc[i].password === pass.value) {
        search = acc[i];
      }
    }
    if (search) {
      localStorage.setItem("currentUser", JSON.stringify(search));
      alert("Đăng nhập thành công!!!");
      window.location.href = "../index.html";
    } else {
      alert("Sai tài khoản hoặc mật khẩu!!!");
    }
  }
});
checkLogin();
function checkLogin() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser !== null) {
    window.location.href = "../index.html";
  }
}

// กำหนดค่า username และ password ที่ถูกต้อง
const validUsername = "630910596";
const validPassword = "1234";

// รับ Element ของฟอร์มและข้อความผลลัพธ์
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const message = document.getElementById("message");

// เพิ่ม event listener สำหรับการ submit ฟอร์ม
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // ยกเลิกการส่งฟอร์ม

    // รับค่า username และ password ที่ผู้ใช้ป้อน
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // เช็คว่าค่า username และ password ถูกต้องหรือไม่
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // ถ้าถูกต้อง
        message.textContent = "Your username and password are correct! You are logged in.";
        loginButton.removeEventListener("click", checkLogin); // ลบ event listener
    } else {
        // ถ้าผิด
        message.textContent = "Your username or password is incorrect! Please try again.";
    }
});

// สร้างฟังก์ชันเพื่อตรวจสอบความถูกต้องของ username และ password
function checkLogin() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        message.textContent = "Your username and password are correct! You are logged in.";
        loginButton.removeEventListener("click", checkLogin);
    } else {
        message.textContent = "Your username or password is incorrect! Please try again.";
    }
}

// เพิ่ม event listener สำหรับคลิกที่ปุ่ม Login
loginButton.addEventListener("click", checkLogin);

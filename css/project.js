// Lấy các phần tử DOM cần thiết
// const emailFormContainer = document.getElementById("email-form-container");
// const personalInfoContainer = document.getElementById(
//   "personal-info-container"
// );
// const emailInput = document.getElementById("email-input");
// const submitButton = document.getElementById("submit-email");
// const errorMessage = document.getElementById("error-message");

// // Regex kiểm tra email hợp lệ
// const emailRegex =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// // Hàm kiểm tra email hợp lệ
// function isValidEmail(email) {
//   return emailRegex.test(email);
// }

// // Xử lý sự kiện khi nhấn nút "Xác nhận"
// submitButton.addEventListener("click", function () {
//   const email = emailInput.value.trim(); // Lấy giá trị email và loại bỏ khoảng trắng thừa

//   if (email === "" || !isValidEmail(email)) {
//     // Nếu email rỗng hoặc không hợp lệ
//     errorMessage.classList.remove("hide"); // Hiển thị thông báo lỗi
//   } else {
//     // Nếu email hợp lệ
//     errorMessage.classList.add("hide"); // Ẩn thông báo lỗi
//     emailFormContainer.classList.add("hide"); // Ẩn form nhập email
//     personalInfoContainer.classList.remove("hide"); // Hiển thị thông tin cá nhân
//   }
//   //nhớ email
//   if (isValidEmail(email)) {
//     errorMessage.style.display = "none";
//     emailFormContainer.style.display = "none";
//     personalInfoContainer.style.display = "block";

//     // Hiển thị email trong thông tin cá nhân
//     const emailDisplay = document.createElement("p");
//     emailDisplay.textContent = `Email: ${email}`;
//     personalInfoContainer.appendChild(emailDisplay);
//   }
// });

// // ẩn hiện thông tin nghề nghiệp, học vấn,...

// document.addEventListener("DOMContentLoaded", function () {
//   // Lấy tất cả các nút "View More"
//   const toggleButtons = document.querySelectorAll(".toggle-info");

//   toggleButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       // Tìm phần tử chứa thông tin liên quan
//       const infoContainer = button
//         .closest(".skill-card")
//         .querySelector(".personal-info-container");

//       // Đảo ngược trạng thái hiển thị
//       infoContainer.classList.toggle("hide");

//       // Thay đổi văn bản nút
//       if (infoContainer.classList.contains("hide")) {
//         infoContainer.classList.remove("hide");
//         button.textContent = "View More";
//       } else {
//         infoContainer.classList.add("hide");

//         button.textContent = "View Less";
//       }
//     });
//   });
// });

//

// Lấy các phần tử DOM cần thiết
const emailFormContainer = document.getElementById("email-form-container");
const personalInfoContainer = document.getElementById(
  "personal-info-container"
);
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-email");
const errorMessage = document.getElementById("error-message");

// Regex kiểm tra email hợp lệ
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
  return emailRegex.test(email);
}

// Xử lý sự kiện khi nhấn nút "Xác nhận"
submitButton.addEventListener("click", function () {
  const email = emailInput.value.trim(); // Lấy giá trị email và loại bỏ khoảng trắng thừa

  if (email === "" || !isValidEmail(email)) {
    // Nếu email rỗng hoặc không hợp lệ
    errorMessage.classList.remove("hide"); // Hiển thị thông báo lỗi
  } else {
    // Nếu email hợp lệ
    errorMessage.classList.add("hide"); // Ẩn thông báo lỗi
    emailFormContainer.classList.add("hide"); // Ẩn form nhập email
    personalInfoContainer.classList.remove("hide"); // Hiển thị thông tin cá nhân
  }
  //nhớ email
  if (isValidEmail(email)) {
    errorMessage.style.display = "none";
    emailFormContainer.style.display = "none";
    personalInfoContainer.style.display = "block";

    // Hiển thị email trong thông tin cá nhân
    const emailDisplay = document.createElement("p");
    emailDisplay.textContent = `Email: ${email}`;
    personalInfoContainer.appendChild(emailDisplay);
  }
});

// ẩn hiện thông tin nghề nghiệp, học vấn,...

document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các nút "View More"
  const toggleButtons = document.querySelectorAll(".toggle-info");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Tìm phần tử chứa thông tin liên quan
      const infoContainer = button
        .closest(".skill-card")
        .querySelector(".personal-info-container");

      // Đảo ngược trạng thái hiển thị
      infoContainer.classList.toggle("hide");

      // Thay đổi văn bản nút
      if (infoContainer.classList.contains("hide")) {
        button.textContent = "View More";
      } else {
        button.textContent = "View Less";
      }
    });
  });
});

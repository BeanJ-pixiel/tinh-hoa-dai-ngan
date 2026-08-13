document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Dừng reload trang mặc định

      // Lấy các element đầu vào
      const fullname = document.getElementById('fullname');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      // Element hiển thị lỗi
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      const successAlert = document.getElementById('successAlert');

      // Reset các thông báo lỗi cũ
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      let isValid = true;

      // 1. Kiểm tra Họ và tên
      if (fullname.value.trim() === '') {
        nameError.textContent = 'Vui lòng nhập họ và tên của bạn.';
        isValid = false;
      }

      // 2. Kiểm tra Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() === '') {
        emailError.textContent = 'Vui lòng nhập địa chỉ email.';
        isValid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Định dạng email không hợp lệ (VD: abc@gmail.com).';
        isValid = false;
      }

      // 3. Kiểm tra Nội dung
      if (message.value.trim() === '') {
        messageError.textContent = 'Vui lòng điền nội dung lời nhắn.';
        isValid = false;
      }

      // Nếu tất cả hợp lệ -> Hiển thị phản hồi tương tác thành công
      if (isValid) {
        successAlert.classList.remove('hidden');
        contactForm.reset();

        // Tự động ẩn thông báo sau 4 giây
        setTimeout(() => {
          successAlert.classList.add('hidden');
        }, 4000);
      }
    });
  }
});
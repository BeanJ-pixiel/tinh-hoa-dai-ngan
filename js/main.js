document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullname = document.getElementById('fullname');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      const successAlert = document.getElementById('successAlert');

      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      let isValid = true;

      if (fullname.value.trim() === '') {
        nameError.textContent = 'Vui lòng nhập họ và tên của bạn.';
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() === '') {
        emailError.textContent = 'Vui lòng nhập địa chỉ email.';
        isValid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Định dạng email không hợp lệ.';
        isValid = false;
      }

      if (message.value.trim() === '') {
        messageError.textContent = 'Vui lòng điền nội dung lời nhắn.';
        isValid = false;
      }

      if (isValid) {
        successAlert.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
          successAlert.classList.add('hidden');
        }, 4000);
      }
    });
  }
});
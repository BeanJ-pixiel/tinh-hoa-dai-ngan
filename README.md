# tinh-hoa-dai-nganTinh Hoa Đại Ngàn

Website giới thiệu và trưng bày các sản phẩm mang nét đặc trưng của Tinh Hoa Đại Ngàn. Dự án được xây dựng theo mô hình website frontend đơn giản với HTML, CSS và JavaScript, dữ liệu sản phẩm được lưu trong file JSON.

1. Giới thiệu dự án

Tinh Hoa Đại Ngàn là một website bán/giới thiệu sản phẩm với các chức năng chính:

Hiển thị danh sách sản phẩm trên trang chủ.

Hiển thị hình ảnh và thông tin sản phẩm.

Xem trang chi tiết của từng sản phẩm.

Có trang liên hệ.

Kiểm tra dữ liệu khi người dùng nhập biểu mẫu liên hệ.

Tách riêng HTML, CSS, JavaScript, dữ liệu và hình ảnh để dễ quản lý.

2. Công nghệ sử dụng

Công nghệ

Mục đích

HTML5

Xây dựng cấu trúc các trang web

CSS3

Thiết kế giao diện và bố cục

JavaScript

Xử lý tương tác và logic của website

JSON

Lưu trữ dữ liệu sản phẩm

Git

Quản lý phiên bản mã nguồn

npm

Quản lý/cấu hình dự án nếu cần mở rộng

3. Cấu trúc thư mục

tinh-hoa-dai-ngan/
│
├── HTML/
│   ├── index.html       # Trang chủ
│   ├── detail.html      # Trang chi tiết sản phẩm
│   └── contact.html     # Trang liên hệ
│
├── CSS/
│   ├── style.css        # CSS chính
│   ├── detail.css       # CSS cho trang chi tiết
│   └── ui.css           # CSS cho các thành phần giao diện
│
├── JS/
│   ├── main.js          # Logic dùng chung
│   ├── index.js         # Logic trang chủ
│   └── detail.js        # Logic trang chi tiết
│
├── data/
│   └── products.json    # Dữ liệu sản phẩm
│
├── images/
│   ├── product-1-1.jpg
│   ├── product-1-2.jpg
│   ├── ...
│   └── product-10-3.jpg # Hình ảnh sản phẩm
│
├── assets/              # Tài nguyên bổ sung của dự án
├── .gitignore           # Các file/thư mục Git bỏ qua
├── package.json         # Thông tin cấu hình dự án
└── README.md            # Tài liệu hướng dẫn dự án


4. Các trang chính

Trang chủ — HTML/index.html

Trang chủ là nơi hiển thị danh sách sản phẩm và giao diện chính của website.

JavaScript trong JS/index.js chịu trách nhiệm xử lý các chức năng liên quan đến trang chủ và dữ liệu sản phẩm.

Trang chi tiết — HTML/detail.html

Trang này dùng để hiển thị thông tin chi tiết của một sản phẩm.

Logic được xử lý chủ yếu trong:

JS/detail.js

Dữ liệu sản phẩm được lấy từ:

data/products.json

Trang liên hệ — HTML/contact.html

Trang liên hệ cung cấp biểu mẫu để người dùng nhập thông tin và gửi yêu cầu.

Các chức năng tương tác và kiểm tra dữ liệu được xử lý bằng JavaScript.

5. Dữ liệu sản phẩm

Dữ liệu được lưu trong:

data/products.json

Việc tách dữ liệu khỏi HTML giúp:

Dễ cập nhật sản phẩm.

Không cần sửa trực tiếp nhiều file HTML.

Có thể mở rộng số lượng sản phẩm.

Dễ chuyển sang sử dụng API hoặc cơ sở dữ liệu trong tương lai.

Hình ảnh sản phẩm được lưu trong thư mục:

images/

và được liên kết với dữ liệu sản phẩm.

6. Cách chạy dự án

Cách 1: Mở trực tiếp bằng trình duyệt

Có thể mở:

HTML/index.html

bằng trình duyệt để xem giao diện.

Tuy nhiên, nếu JavaScript sử dụng fetch() để đọc data/products.json, trình duyệt có thể chặn việc đọc file khi chạy bằng file://.

Cách 2: Chạy bằng HTTP Server

Khuyến nghị chạy dự án bằng một HTTP server.

Nếu máy đã cài Node.js, có thể sử dụng http-server:

npx http-server .

Sau đó mở địa chỉ server được hiển thị trong terminal, ví dụ:

http://localhost:8080

Khi truy cập, mở:

HTML/index.html

7. Cài đặt môi trường

Nếu sử dụng Node.js/npm, kiểm tra phiên bản:

node -v
npm -v

Nếu hệ thống báo không nhận diện được node hoặc npm, cần kiểm tra lại việc cài đặt Node.js và biến môi trường PATH.

8. Quy trình phát triển

Một quy trình làm việc đề xuất:

Chỉnh sửa HTML trong thư mục HTML/.

Chỉnh sửa giao diện trong thư mục CSS/.

Chỉnh sửa logic trong thư mục JS/.

Cập nhật dữ liệu trong data/products.json.

Thêm/thay đổi hình ảnh trong images/.

Chạy website bằng HTTP server.

Kiểm tra giao diện và chức năng trên trình duyệt.

Commit thay đổi bằng Git.

Ví dụ:

git status
git add .
git commit -m "update website"
git push

9. Git và các nhánh

Dự án đã được quản lý bằng Git và có các nhánh phục vụ phát triển tính năng, ví dụ:

main: nhánh chính.

feature/contact-page: phát triển trang liên hệ.

feature/ui-layout: phát triển giao diện.

Nên tạo nhánh riêng khi phát triển một tính năng mới để hạn chế ảnh hưởng đến nhánh chính.

10. Hướng phát triển

Trong tương lai có thể mở rộng dự án bằng cách:

Thêm chức năng tìm kiếm sản phẩm.

Thêm bộ lọc và phân loại sản phẩm.

Thêm giỏ hàng.

Thêm chức năng đặt hàng.

Kết nối API/backend.

Sử dụng cơ sở dữ liệu để quản lý sản phẩm.

Tối ưu responsive cho điện thoại, máy tính bảng và máy tính.

Bổ sung xác thực và quản lý tài khoản người dùng.

11. Tác giả

Dự án: Tinh Hoa Đại Ngàn

README này được xây dựng dựa trên cấu trúc và các thành phần có trong file dự án tinh-hoa-dai-ngan.rar.
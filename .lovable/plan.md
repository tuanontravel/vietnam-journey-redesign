# Xây dựng lại trang bằng HTML thuần

## Kết quả bàn giao
- Tạo một bộ website HTML/CSS/JavaScript thuần, không phụ thuộc React, TanStack hay quy trình build.
- Trang chính chạy từ `index.html`; trang Vietnam Collection chạy từ `vietnam/index.html`.
- Đóng gói toàn bộ thành một file ZIP để tải về, giải nén và đưa thẳng lên VPS/Nginx.

## Nội dung và nhận diện
- Giữ nguyên logo Absolute Asia Travel, favicon, dòng “Private Journeys · Since 2012” và bảng màu Quiet Luxury hiện tại.
- Giữ đầy đủ mọi phần của trang hành trình: thanh tin cậy, điều hướng, ảnh bìa, video, quyền lợi, so sánh, lịch trình 10 ngày, khách sạn, nhà sáng lập, giấy phép, đội ngũ, đánh giá, FAQ, Free Vietnam Guide, Journey Enquiry và chân trang.
- Giữ trang Vietnam Collection cùng các điểm đến và hành trình liên quan.
- Dùng lại ảnh gốc và ảnh đã tối ưu trong dự án; ảnh bìa điện thoại dùng bản dọc riêng.

## Tương tác bằng JavaScript thuần
- Menu điện thoại, cuộn tới từng phần, mở/đóng toàn bộ lịch trình, bộ lọc đánh giá, thư viện đội ngũ và hộp xem giấy phép.
- Video chỉ tải YouTube sau khi khách bấm xem.
- Kiểm tra dữ liệu biểu mẫu, trạng thái đang gửi, báo lỗi và lời cảm ơn.

## Biểu mẫu
- HTML thuần không thể tự giữ khóa bí mật hoặc ghi trực tiếp an toàn vào cơ sở dữ liệu.
- Hai biểu mẫu sẽ gọi các địa chỉ xử lý cấu hình trong `config.js`; kèm định dạng dữ liệu và hướng dẫn để nối với API trên VPS.
- Nếu chưa cấu hình API, biểu mẫu sẽ hiển thị thông báo liên hệ qua email thay vì báo gửi thành công giả.

## Kiểm tra và đóng gói
- Kiểm tra ở 375px, tablet và desktop: không tràn ngang, menu và nút cố định không che nội dung.
- Kiểm tra mỗi trang chỉ có một tiêu đề chính, đầy đủ mô tả tìm kiếm, dữ liệu FAQ/Organization, nhãn biểu mẫu và thao tác bàn phím.
- Kiểm tra mọi đường dẫn ảnh/CSS/JavaScript hoạt động khi phục vụ bằng Nginx.
- Bàn giao ZIP gồm HTML, CSS, JavaScript, ảnh, `config.js` và hướng dẫn tải lên VPS.

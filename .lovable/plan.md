# Cập nhật thương hiệu và xuất bản VPS

## Thay đổi trên trang
- Đổi “Private Journeys · Since 2010” thành “Private Journeys · Since 2012”.
- Thay chữ thương hiệu ở đầu trang và chân trang bằng logo Absolute Asia Travel đã tải lên.
- Dùng chính biểu tượng từ logo làm favicon trình duyệt.
- Giữ kích thước logo gọn trên điện thoại và desktop, không làm thay đổi bố cục hiện tại.

## Gói bàn giao VPS
- Tạo bản build production của ứng dụng hiện tại.
- Đóng gói đầy đủ file chạy trên VPS, kèm hướng dẫn cài đặt, biến môi trường và lệnh chạy.
- Vì form Free Vietnam Guide, Journey Enquiry và trang `/leads` cần xử lý phía máy chủ, bản bàn giao sẽ là ứng dụng web production chạy bằng Node/Bun, không phải một file HTML tĩnh đơn lẻ. Các trang vẫn trả HTML chuẩn khi truy cập.
- Kiểm tra trang chính và `/vietnam` trên điện thoại/desktop, logo, favicon, năm thành lập, form và lỗi hiển thị trước khi tạo file ZIP tải xuống.

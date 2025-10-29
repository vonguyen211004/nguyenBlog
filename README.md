# nguyenBlog - Nền tảng Blog Hiện đại

nguyenBlog là một ứng dụng blog toàn diện được xây dựng bằng React, Node.js và MongoDB. Nó cung cấp một giao diện người dùng thân thiện để đọc blog và một bảng điều khiển quản trị viên mạnh mẽ để quản lý nội dung.

## 🌟 Tính năng chính

### Cho người dùng
- 📖 **Duyệt Blog**: Xem danh sách các bài blog được phân loại theo chủ đề
- 🔍 **Tìm kiếm**: Tìm kiếm bài blog theo tiêu đề hoặc danh mục
- 💬 **Bình luận**: Để lại bình luận trên các bài blog (chờ phê duyệt)
- 🎨 **Giao diện đẹp**: Thiết kế hiện đại với hỗ trợ tiếng Việt đầy đủ
- 📱 **Responsive**: Hoạt động tốt trên tất cả các thiết bị

### Cho quản trị viên
- ✍️ **Tạo bài viết**: Tạo bài blog mới với trình soạn thảo rich text
- ✏️ **Chỉnh sửa bài viết**: Cập nhật nội dung bài blog hiện có
- 🗑️ **Xóa bài viết**: Xóa bài blog không cần thiết
- 💬 **Quản lý bình luận**: Phê duyệt hoặc từ chối bình luận
- 📊 **Bảng điều khiển**: Xem thống kê tổng quan về blog, bình luận và bản nháp
- 🔐 **Xác thực**: Đăng nhập an toàn cho quản trị viên

## 📂 Cấu trúc dự án

\`\`\`
nguyenBlog/
├── frontend/                 # Ứng dụng React
│   ├── src/
│   │   ├── components/      # Các component React
│   │   ├── pages/           # Các trang chính
│   │   ├── pages/admin/     # Các trang quản trị
│   │   ├── context/         # Context API cho state management
│   │   ├── assets/          # Hình ảnh, icon và dữ liệu
│   │   ├── index.css        # Styles toàn cục
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
├── backend/                  
└── README.md
\`\`\`

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 19** - Thư viện UI
- **React Router** - Định tuyến
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Quill** - Rich text editor
- **Framer Motion** - Animations
- **React Hot Toast** - Notifications
- **Moment.js** - Xử lý ngày tháng

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database

## 🚀 Cài đặt và chạy

### Yêu cầu
- Node.js (v14 hoặc cao hơn)
- npm hoặc yarn

### Bước 1: Clone repository
\`\`\`bash
git clone <repository-url>
cd nguyenBlog
\`\`\`

### Bước 2: Cài đặt dependencies
\`\`\`bash
cd frontend
npm install
\`\`\`

### Bước 3: Chạy ứng dụng
\`\`\`bash
npm run dev
\`\`\`

Ứng dụng sẽ chạy tại `http://localhost:5173`

### Bước 4: Build cho production
\`\`\`bash
npm run build
\`\`\`

## 📝 Danh mục Blog

Ứng dụng hỗ trợ 5 danh mục chính:

| Tiếng Anh | Tiếng Việt |
|-----------|-----------|
| All | Tất cả |
| Technology | Công nghệ |
| Startup | Khởi nghiệp |
| Lifestyle | Lối sống |
| Finance | Tài chính |

## 🌐 Hỗ trợ tiếng Việt

Ứng dụng được tối ưu hóa hoàn toàn cho tiếng Việt:
- ✅ Font chữ hỗ trợ đầy đủ ký tự tiếng Việt (Noto Sans Vietnamese)
- ✅ Giao diện hoàn toàn bằng tiếng Việt
- ✅ Xử lý diacritics chính xác

## 🔐 Xác thực quản trị viên

Để truy cập bảng điều khiển quản trị:
1. Nhấp vào nút "Đi đến Tổng quan" trên trang chủ
2. Đăng nhập bằng thông tin quản trị viên
3. Quản lý bài blog và bình luận

## 📱 Các trang chính

### Trang người dùng
- **Trang chủ** (`/`) - Hiển thị danh sách blog với bộ lọc danh mục
- **Chi tiết bài blog** (`/blog/:id`) - Xem nội dung đầy đủ và bình luận

### Trang quản trị
- **Đăng nhập** (`/admin/login`) - Xác thực quản trị viên
- **Bảng điều khiển** (`/admin/dashboard`) - Tổng quan thống kê
- **Danh sách bài viết** (`/admin/all-blogs`) - Quản lý tất cả bài blog
- **Tạo bài viết** (`/admin/add-blog`) - Tạo bài blog mới
- **Quản lý bình luận** (`/admin/comments`) - Phê duyệt bình luận

## 🎨 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa các biến CSS trong `frontend/src/index.css`:
\`\`\`css
:root {
  --primary: #your-color;
  --primary-dark: #your-dark-color;
}
\`\`\`

### Thêm danh mục mới
1. Cập nhật `blogCategories` trong `frontend/src/assets/assets.js`
2. Thêm bản dịch trong `categoryTranslations`

## 📧 Liên hệ & Hỗ trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng:
- Tạo một issue trên GitHub
- Liên hệ qua email

## 📄 Giấy phép

Dự án này được cấp phép dưới MIT License.

## 🙏 Cảm ơn

Cảm ơn bạn đã sử dụng NguyenBlog! Nếu bạn thích dự án này, vui lòng cho nó một ⭐ trên GitHub.

---

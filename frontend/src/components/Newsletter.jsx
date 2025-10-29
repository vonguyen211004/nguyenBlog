"use client"

import { useNavigate } from "react-router-dom"

const Newsletter = () => {
  const navigate = useNavigate()

  const handleCreateBlog = () => {
    navigate("/admin/")
  }

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 my-32 px-4">
      <h1 className="md:text-5xl text-3xl font-bold text-slate-900">Bạn muốn tạo bài viết?</h1>
      <p className="md:text-lg text-base text-slate-600 max-w-2xl">
        Truy cập bảng điều khiển quản trị viên để tạo, chỉnh sửa và quản lý các bài viết của bạn một cách dễ dàng.
      </p>

      <button
        onClick={handleCreateBlog}
        className="md:px-8 px-6 md:py-3 py-2 text-white font-medium bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg transition-all cursor-pointer rounded-lg whitespace-nowrap"
      >
        Đi đến Tổng quan
      </button>
    </div>
  )
}

export default Newsletter

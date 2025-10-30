"use client"
import { assets } from "../../assets/assets"
import { useAppContext } from "../../context/useAppContext"
import { toast } from "react-hot-toast"
import { formatDateVietnameseShort } from "../utils/dateFormatter.js"

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog
  const BlogDate = new Date(createdAt)

  const { axios } = useAppContext()

  const deleteBlog = async () => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?")
    if (!confirm) return
    try {
      const { data } = await axios.post("/api/blog/delete", { id: blog._id })
      if (data.success) {
        toast.success(data.message)
        await fetchBlogs()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const togglePublish = async () => {
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", { id: blog._id })
      if (data.success) {
        toast.success(data.message)
        await fetchBlogs()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{formatDateVietnameseShort(createdAt)}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>
          {blog.isPublished ? "Đã đăng bài viết" : "Chưa đăng bài viết"}
        </p>
      </td>
      <td className="px-2 py-4 flex text-xs gap-3">
        <button onClick={togglePublish} className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
          {blog.isPublished ? "Không đăng bài" : "Đăng bài"}
        </button>
        <img
          src={assets.cross_icon || "/placeholder.svg"}
          alt=""
          className="w-8 hover:scale-110 transition-all cursor-pointer"
          onClick={deleteBlog}
        />
      </td>
    </tr>
  )
}

export default BlogTableItem

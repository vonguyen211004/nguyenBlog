"use client"
import { assets } from "../../assets/assets"
import toast from "react-hot-toast"
import { useAppContext } from "../../context/useAppContext"
import { formatDateVietnameseShort } from "../utils/dateFormatter.js"

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment

  const { axios } = useAppContext()

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", { id: _id })
      if (data.success) {
        toast.success(data.message)
        await fetchComments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteComment = async () => {
    try {
      const confirm = window.confirm("Bạn có chắc chắn muốn xóa bình luận này không?")
      if (!confirm) return
      const { data } = await axios.post("/api/admin/delete-comment", { id: _id })
      if (data.success) {
        toast.success(data.message)
        await fetchComments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Bài viết</b> : {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Tên</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-600">Bình luận</b> : {comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">{formatDateVietnameseShort(createdAt)}</td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon || "/placeholder.svg"}
              className="w-5 hover:scale-110 transition-all cursor-pointer"
            />
          ) : (
            <p
              className="text-xs w-full text-center
                border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1"
            >
              Chấp nhận
            </p>
          )}
          <img
            onClick={deleteComment}
            src={assets.bin_icon || "/placeholder.svg"}
            alt=""
            className="w-5 hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  )
}

export default CommentTableItem

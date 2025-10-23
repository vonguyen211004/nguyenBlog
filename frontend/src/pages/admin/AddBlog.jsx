"use client"

import { useEffect } from "react"
import { useState, useRef } from "react"
import { assets, blogCategories } from "../../assets/assets"
import Quill from "quill"
import { useAppContext } from "../../context/useAppContext"
import toast from "react-hot-toast"
import { marked } from "marked"

const AddBlog = () => {
  const { axios } = useAppContext()
  const [isAdding, setIsAdding] = useState(false)
  const [loading, setLoading] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [category, setCategory] = useState("Startup")
  const [isPublished, setisPublished] = useState(false)

  const generateContent = async () => {
    if (!title) return toast.error("Please enter a title")

    try {
      setLoading(true)
      const { data } = await axios.post("/api/blog/generate", { prompt: title })
      if (data.success) {
        quillRef.current.root.innerHTML = marked.parse(data.content)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      setIsAdding(true)

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      }

      const formData = new FormData()
      formData.append("blog", JSON.stringify(blog))
      formData.append("image", image)

      const { data } = await axios.post("/api/blog/add", formData)

      if (data.success) {
        toast.success(data.message)
        setImage(false)
        setTitle("")
        quillRef.current.root.innerHTML = ""
        setCategory("Startup")
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsAdding(false)
    }
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" })
    }
  }, [])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-700 min-h-screen overflow-auto"
    >
      <div className="bg-white w-full max-w-4xl p-6 md:p-10 m-6 md:m-10 shadow-sm rounded-xl border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Tạo Bài viết mới</h2>

        <div className="space-y-8">
          {/* Thumbnail upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">Cập nhật ảnh Thumbnail</label>
            <label htmlFor="image" className="block">
              <img
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                className="mt-2 h-48 w-full object-cover rounded-lg cursor-pointer border-2 border-dashed border-slate-300 hover:border-primary transition-colors"
              />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
            </label>
          </div>

          {/* Blog Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">Tiêu đề</label>
            <input
              type="text"
              placeholder="Enter an engaging title..."
              required
              className="w-full p-3 border border-slate-300 outline-none rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          {/* Sub Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">Phụ đề</label>
            <input
              type="text"
              placeholder="Add a compelling subtitle..."
              required
              className="w-full p-3 border border-slate-300 outline-none rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              onChange={(e) => setSubTitle(e.target.value)}
              value={subTitle}
            />
          </div>

          {/* Blog Description */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">Nội dung</label>
            <div className="relative border border-slate-300 rounded-lg overflow-hidden">
              <div ref={editorRef} className="min-h-80"></div>
              {loading && (
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full border-3 border-primary/30 border-t-primary animate-spin"></div>
                </div>
              )}
              <button
                disabled={loading}
                type="button"
                onClick={generateContent}
                className="absolute bottom-4 right-4 text-xs text-white font-medium
                bg-gradient-to-r from-primary to-primary-dark px-4 py-2 rounded-lg hover:shadow-lg cursor-pointer z-50 transition-all"
              >
                ✨ Tạo nội dung với AI
              </button>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">Thể loại</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="w-full px-4 py-3 border border-slate-300 text-slate-700 outline-none rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="">Chọn thể loại</option>
              {blogCategories.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </div>

          {/* Publish checkbox */}
          <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <input
              type="checkbox"
              id="publish"
              checked={isPublished}
              className="w-5 h-5 cursor-pointer accent-primary"
              onChange={(e) => {
                setisPublished(e.target.checked)
              }}
            />
            <label htmlFor="publish" className="font-medium text-slate-900 cursor-pointer">
              Xuất bản ngay lập tức
            </label>
          </div>

          {/* Submit button */}
          <button
            disabled={isAdding}
            type="submit"
            className="w-full md:w-48 h-12 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg cursor-pointer font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            {isAdding ? "Đang thêm..." : "Thêm Bài viết"}
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddBlog

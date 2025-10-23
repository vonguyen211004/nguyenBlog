import { NavLink } from "react-router-dom"
import { assets } from "../../assets/assets"

const Sidebar = () => {
  return (
    <div className="bg-white border-r border-slate-200 min-h-screen">
      <NavLink
        end={true}
        to="/admin"
        className={({
          isActive,
        }) => `flex items-center gap-3 py-4 px-4 md:px-6 md:min-w-64 cursor-pointer transition-all
        ${isActive ? "bg-gradient-to-r from-primary/10 to-primary/5 border-r-4 border-primary text-primary" : "text-slate-600 hover:bg-slate-50"}`}
      >
        <img src={assets.home_icon || "/placeholder.svg"} alt="" className="min-w-5 w-5" />
        <p className="hidden md:inline-block font-medium">Tổng quan</p>
      </NavLink>

      <NavLink
        to="/admin/addBlog"
        className={({
          isActive,
        }) => `flex items-center gap-3 py-4 px-4 md:px-6 md:min-w-64 cursor-pointer transition-all
        ${isActive ? "bg-gradient-to-r from-primary/10 to-primary/5 border-r-4 border-primary text-primary" : "text-slate-600 hover:bg-slate-50"}`}
      >
        <img src={assets.add_icon || "/placeholder.svg"} alt="" className="min-w-5 w-5" />
        <p className="hidden md:inline-block font-medium">Thêm Bài viết</p>
      </NavLink>

      <NavLink
        to="/admin/listBlog"
        className={({
          isActive,
        }) => `flex items-center gap-3 py-4 px-4 md:px-6 md:min-w-64 cursor-pointer transition-all
        ${isActive ? "bg-gradient-to-r from-primary/10 to-primary/5 border-r-4 border-primary text-primary" : "text-slate-600 hover:bg-slate-50"}`}
      >
        <img src={assets.list_icon || "/placeholder.svg"} alt="" className="min-w-5 w-5" />
        <p className="hidden md:inline-block font-medium">Danh sách Bài viết</p>
      </NavLink>

      <NavLink
        to="/admin/comments"
        className={({
          isActive,
        }) => `flex items-center gap-3 py-4 px-4 md:px-6 md:min-w-64 cursor-pointer transition-all
        ${isActive ? "bg-gradient-to-r from-primary/10 to-primary/5 border-r-4 border-primary text-primary" : "text-slate-600 hover:bg-slate-50"}`}
      >
        <img src={assets.comment_icon || "/placeholder.svg"} alt="" className="min-w-5 w-5" />
        <p className="hidden md:inline-block font-medium">Danh sách Bình luận</p>
      </NavLink>
    </div>
  )
}

export default Sidebar

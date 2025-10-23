"use client"
import { assets } from "../assets/assets"
import { useAppContext } from "../context/useAppContext"

const Navbar = () => {
  const { navigate, token } = useAppContext()
  return (
    <div className="flex justify-between items-center py-6 mx-8 sm:mx-20 xl:mx-32 border-b border-slate-100">
      <div onClick={() => navigate("/")} className="cursor-pointer text-2xl sm:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300 tracking-tight select-none" >
        <span className="text-stone-500">nguyen</span>
        <span className="text-gray-800">Blog</span>
      </div>
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-lg text-sm font-medium cursor-pointer bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 hover:shadow-lg transition-all"
      >
        {token ? "Tổng quan" : "Đăng nhập"}
        <img src={assets.arrow || "/placeholder.svg"} alt="arrow" className="w-3" />
      </button>
    </div>
  )
}

export default Navbar

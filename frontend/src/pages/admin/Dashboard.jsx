"use client"

import { useEffect, useState } from "react"
import { assets } from "../../assets/assets"
import BlogTableItem from "../../components/admin/BlogTableItem"
import toast from "react-hot-toast"
import { useAppContext } from "../../context/useAppContext"

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  })

  const { axios } = useAppContext()

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard")
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])
  return (
    <div className="flex-1 p-4 md:p-10 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="flex flex-wrap gap-6 mb-8">
        <div
          className="flex items-center gap-4 bg-white p-6 min-w-64 rounded-xl
        shadow-sm hover:shadow-lg transition-all border border-slate-100 cursor-pointer group"
        >
          <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-all">
            <img src={assets.dashboard_icon_1 || "/placeholder.svg"} alt="" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">{dashboardData.blogs}</p>
            <p className="text-slate-500 font-medium text-sm">Tổng số Blog</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white p-6 min-w-64 rounded-xl
        shadow-sm hover:shadow-lg transition-all border border-slate-100 cursor-pointer group"
        >
          <div className="p-3 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 group-hover:from-purple-200 group-hover:to-purple-100 transition-all">
            <img src={assets.dashboard_icon_2 || "/placeholder.svg"} alt="" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">{dashboardData.comments}</p>
            <p className="text-slate-500 font-medium text-sm">Tổng số Bình luận</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white p-6 min-w-64 rounded-xl
        shadow-sm hover:shadow-lg transition-all border border-slate-100 cursor-pointer group"
        >
          <div className="p-3 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 group-hover:from-amber-200 group-hover:to-amber-100 transition-all">
            <img src={assets.dashboard_icon_3 || "/placeholder.svg"} alt="" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">{dashboardData.drafts}</p>
            <p className="text-slate-500 font-medium text-sm">Tổng số Blog Nháp</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex items-center gap-3 p-6 border-b border-slate-100">
          <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50">
            <img src={assets.dashboard_icon_4 || "/placeholder.svg"} alt="" className="w-5 h-5" />
          </div>
          <p className="text-lg font-semibold text-slate-900">Các bài viết mới nhất</p>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-slate-600">
            <thead className="text-xs font-semibold text-slate-700 text-left uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  Tiêu đề bài viết
                </th>
                <th scope="col" className="px-6 py-4 max-sm:hidden">
                  Ngày viết
                </th>
                <th scope="col" className="px-6 py-4 max-sm:hidden">
                  Trạng thái
                </th>
                <th scope="col" className="px-6 py-4">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {dashboardData.recentBlogs.map((blog, index) => {
                return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

import React from 'react'
// import { assets } from '../../assets/assets'
import { Outlet} from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/useAppContext'

const Layout = () => {
    const {axios, setToken, navigate} = useAppContext();

    const logout = () => {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        setToken(null);
        navigate('/')
    }
  return (
    <>
        <div className='flex item-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
            <div onClick={() => navigate("/")} className="cursor-pointer text-2xl sm:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300 tracking-tight select-none" >
                <span className="text-stone-500">nguyen</span>
                <span className="text-gray-800">Blog</span>
            </div>
            <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer '>Đăng xuất</button>
        </div>
        <div className='flex h-[calc(100vh-70px)]'>
            <Sidebar/>
            <Outlet/>
        </div>
    </>
  )
}

export default Layout

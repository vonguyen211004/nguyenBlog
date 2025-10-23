"use client"
import { assets } from "../assets/assets"
import { useAppContext } from "../context/useAppContext"
import { useRef } from "react"

const Header = () => {
  const { input, setInput } = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput("")
    inputRef.current.value = ""
  }
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-12">
        <div
          className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10
                rounded-full text-sm font-medium text-primary"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <p>Mới: Tích hợp tính năng AI</p>
        </div>

        <h1 className="text-4xl sm:text-7xl font-bold sm:leading-tight text-slate-900 mb-6">
          Tạo nên không gian viết của{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">riêng bạn</span> <br />{" "}
        </h1>

        <p className="my-8 sm:my-10 max-w-2xl m-auto text-base sm:text-lg text-slate-600 leading-relaxed">
          Đây là nơi bạn có thể nói lên suy nghĩ, chia sẻ điều ý nghĩa và viết ra mọi cảm xúc — không rào cản, không giới hạn.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-2xl max-sm:scale-90 mx-auto border border-slate-200 bg-white
                            rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Tìm kiếm blog..."
            className="w-full pl-6 outline-none text-slate-700 placeholder-slate-400"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 font-medium hover:shadow-lg
                    transition-all cursor-pointer whitespace-nowrap"
          >Tìm kiếm</button>
        </form>
      </div>

      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border border-slate-300 font-medium text-xs py-2 px-4 rounded-lg shadow-sm
                cursor-pointer hover:bg-slate-50 transition-colors"
          >
            Clear Search
          </button>
        )}
      </div>

      <img src={assets.gradientBackground || "/placeholder.svg"} alt="" className="absolute -top-50 -z-1 opacity-30" />
    </div>
  )
}

export default Header

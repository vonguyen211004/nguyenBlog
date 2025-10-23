const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 my-32 px-4">
      <h1 className="md:text-5xl text-3xl font-bold text-slate-900">Đừng bỏ lỡ bất kỳ bài viết nào!</h1>
      <p className="md:text-lg text-base text-slate-600 pb-8 max-w-2xl">
        Đăng ký để nhận những bài blog mới nhất, chia sẻ công nghệ và tin tức độc quyền được gửi thẳng đến hộp thư của bạn.
      </p>

      <form className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12 gap-2">
        <input
          className="border border-slate-300 rounded-lg h-full outline-none
            w-full px-4 text-slate-700 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          type="email"
          placeholder="Nhập email của bạn"
          required
        />
        <button className="md:px-8 px-6 h-full text-white font-medium bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg transition-all cursor-pointer rounded-lg whitespace-nowrap">
          Đăng ký
        </button>
      </form>
    </div>
  )
}

export default Newsletter

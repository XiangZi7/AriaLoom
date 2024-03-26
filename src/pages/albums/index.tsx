function Albums() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="shadow-lg rounded-lg overflow-hidden md:max-w-2xl transition-all duration-500 hover:shadow-2xl">
        <img
          src="https://via.placeholder.com/500"
          alt="Album Cover"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            专辑名称
          </h2>
          <p className="text-lg text-gray-500 mb-3">艺术家 / 乐队</p>
          <p className="text-sm text-gray-400 mb-5">发行日期：2023-01-01</p>
          <p className="text-gray-600">
            这是对专辑的简单介绍，讲述了专辑的风格，哪些曲目值得特别注意，以及艺术家为这个专辑准备过程中的有趣故事。这段文案简洁而内容丰富，可以让读者迅速掌握专辑的基本信息。
          </p>
        </div>
      </div>
    </div>
  );
}

export default Albums;

const Radio = () => {
  return (
    <div className=" p-4">
      <h2 className="text-3xl font-bold text-center">热门电台</h2>
      <div className="mt-6 flex flex-col items-center">
        {/* 假设这里每一个条目是一个电台 */}
        {[1, 2, 3, 4].map((radio) => (
          <div key={radio} className=" shadow rounded-lg w-full md:w-2/3 p-4 mb-4 flex items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Radio Logo"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">电台 {radio}</h3>
              <p className="text-gray-600">一个简单的介绍。</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;

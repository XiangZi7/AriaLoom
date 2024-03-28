const Playlists = () => {
  return (
    <div className="  p-4">
      <h2 className="text-3xl font-bold text-center">精选歌单</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 假设这里每一个div是一个播放列表 */}
        {[1, 2, 3, 4, 5, 6].map((playlist) => (
          <div key={playlist} className=" shadow rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Playlist Cover" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">播放列表 {playlist}</h3>
              <p className="text-gray-600">介绍简单的播放列表信息。</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;

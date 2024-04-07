import TablePro from '@/components/TablePro';

const playlistDetail = {
  id: 1,
  title: 'Chill Beats',
  description: 'A collection of relaxing chill music.',
  coverImage: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
  songs: [
    { id: 1, title: 'Song One', artist: 'Artist A' },
    { id: 2, title: 'Song Two', artist: 'Artist B' },
    { id: 3, title: 'Song Three', artist: 'Artist C' },
  ],
};

function PlaylistDetail() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex mb-8">
        <div className="flex-none w-72 h-72">
          <div className="relative shadow-black/5 shadow-none rounded-large">
            <img
              className="relative z-10 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
              src={playlistDetail.coverImage}
              alt="Playlist cover"
            />
            <img
              className="absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-large"
              src={playlistDetail.coverImage}
              alt="Playlist cover"
            />
          </div>
        </div>
        <div className="flex-grow ml-4">
          <h1 className="text-4xl font-bold mb-2">{playlistDetail.title}</h1>
          <p className="text-gray-700">{playlistDetail.description}</p>
        </div>
      </div>

      <div className="song-list">
        <h2 className="text-2xl font-semibold mb-4">Songs</h2>
        <TablePro />

        {/* <div className="space-y-4">
          {playlistDetail.songs.map((song) => (
            <div
              key={song.id}
              className="shadow bg-default-400/20 dark:bg-default-500/30 rounded-2xl p-4 flex items-center hover:opacity-80 transition-all duration-300 ease-in-out"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium">{song.title}</h3>
                <p className="text-sm text-gray-600">{song.artist}</p>
              </div>
              <button className="ml-auto text-blue-500 hover:text-blue-700 transition-colors">Play</button>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default PlaylistDetail;

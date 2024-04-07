import { useNavigate } from 'react-router-dom';
const MVList = () => {
  const navigate = useNavigate();

  const mvList = [
    {
      id: 1,
      title: 'Song One',
      artist: 'Artist A',
      cover: 'cover-url-1.jpg',
      detailUrl: '/mv/1',
    },
    {
      id: 2,
      title: 'Song Two',
      artist: 'Artist B',
      cover: 'cover-url-2.jpg',
      detailUrl: '/mv/2',
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap ">
        {mvList.map((mv) => (
          <a
            onClick={() => navigate(`/playmv/${mv.id}`)}
            key={mv.id}
            className="w-56 m-4 overflow-hidden shadow-lg flex flex-col items-center"
          >
            <img src={mv.cover} alt={mv.title} className="w-full" />
            <div className="p-4 bg-white w-full">
              <h2 className="text-xl font-semibold">{mv.title}</h2>
              <p className="text-gray-600">{mv.artist}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MVList;

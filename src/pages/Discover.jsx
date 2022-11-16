import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamcore";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Discover = () => {
  const [genre, setGenre] = useState("POP");
  const { data, isFetching, error } = useGetTopChartsQuery(genre);
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-more sm:mt-0 mt-5 cursor-pointer"
        >
          {genres.map((e) => (
            <option key={e.value} value={e.value} className="cursor-pointer">
              {e.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              song={song}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Discover;

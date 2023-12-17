// import { useLocation, useNavigate } from "react-router-dom";
import { Divider, Stack } from "@mui/material";
import MovieCard from "./MovieCard";
import { MoviesList } from "../../../models";

const mock: MoviesList = {
  movies: [
    {
      id: 2148,
      movieCode: ["HO00004726"],
      title_en: "Wonka",
      title_th: "วองก้า",
      rating: "ทป.",
      rating_id: 0,
      duration: 116,
      release_date: "2023-12-07",
      sneak_date: "2022-08-15",
      synopsis_th: 'มาร่วมค้นหาว่าทำไมวิลลี่ถึงกลายเป็น "วองก้า"',
      synopsis_en:
        "Based on the extraordinary character at the center of Charlie and the Chocolate Factory",
      director: "Paul King",
      actor:
        "Hugh Grant/Timothée Chalamet/Olivia Colman/Sally Hawkins/Keegan-Michael Key/Rowan Atkinson/Calah Lane/Paterson Joseph/Matt Lucas/Jim Carter/Tom Davis/Natasha Rothwell/Rakhee Thakrar/Kobna Holdbrook-Smith/Simon Farnaby/Colin O'Brien/Ellie White",
      genre: "Adventure/Comedy/Fantasy/Musical",
      poster_ori: "/uploads/movie/3517/thumb_3517.jpg",
      poster_url:
        "https://cdn.majorcineplex.com/uploads/movie/3517/thumb_3517.jpg?v=202312171406",
      trailer: "https://cdn.majorcineplex.com/embed/7932",
      tr_ios:
        "http://27.254.80.209:1935/media/_definst_/mp4:major/trailer/7932/7932_720.mp4/playlist.m3u8",
      tr_hd:
        "rtsp://27.254.80.209:1935/media/_definst_/mp4:major/trailer/7932/7932_720.mp4",
      tr_sd:
        "rtsp://27.254.80.209:1935/media/_definst_/mp4:major/trailer/7932/7932_360.mp4",
      tr_mp4:
        "https://cdn.majorcineplex.com/uploads/trailer/rawvideo/7932/7932.mp4",
      priority: "80000",
      now_showing: "1",
      advance_ticket: "0",
      date_update: "2023-12-07 11:20:19",
      show_buyticket: "1",
      trailer_cms_id: "7932",
      trailer_ivx_key: "2844941",
    },
    {
      id: 2155,
      movieCode: ["HO00004733"],
      title_en: "Dream Scenario",
      title_th: "คืนนี้จงฝันถึงผม",
      rating: "น13+",
      rating_id: 2,
      duration: 102,
      release_date: "2023-12-14",
      sneak_date: "2023-09-07",
      synopsis_th:
        "ชีวิตของชายผู้ไร้โชคต้องผลิกผันเมื่อมีคนนับล้านเริ่มมองเห็นเขาในความฝัน เขาจึงต้องออกเดินทางในเส้นทางของการเป็นคนดัง",
      synopsis_en: "Hapless family man Paul Matthews (Nicolas Cage)",
      director: "Kristoffer Borgli",
      actor:
        "Nicolas Cage/Michael Cera/Julianne Nicholson/Dylan Baker/Kate Berlant/Dylan Gelula/Tim Meadows/Jennifer Wigmore/Lily Bird/Marnie McPhail/Krista Bridges/Sofia Banzhaf/Noah Lamanna/Paula Boudreau/Lily Gao/Kaleb Horn",
      genre: "Comedy/Horror",
      poster_ori: "/uploads/movie/3958/thumb_3958.jpg",
      poster_url:
        "https://cdn.majorcineplex.com/uploads/movie/3958/thumb_3958.jpg?v=202312171406",
      trailer: "https://cdn.majorcineplex.com/embed/8002",
      tr_ios:
        "http://27.254.80.209:1935/media/_definst_/mp4:major/trailer/8002/8002_720.mp4/playlist.m3u8",
      tr_hd:
        "rtsp://27.254.80.209:1935/media/_definst_/mp4:major/trailer/8002/8002_720.mp4",
      tr_sd:
        "rtsp://27.254.80.209:1935/media/_definst_/mp4:major/trailer/8002/8002_360.mp4",
      tr_mp4:
        "https://cdn.majorcineplex.com/uploads/trailer/rawvideo/8002/8002.mp4",
      priority: "79999",
      now_showing: "1",
      advance_ticket: "0",
      date_update: "2023-12-15 16:18:16",
      show_buyticket: "1",
      trailer_cms_id: "8002",
      trailer_ivx_key: "2876108",
    },
  ],
};

export default function Home() {
  return (
    <div className="w-full flex flex-row flex-grow">
      <div className="w-full xl-max:w-2/3 px-[20px] sm:px-12 md:px-18 lg:px-32 pt-[72px] md:pt-14 flex flex-col justify-between flex-grow">
        <Stack spacing={2} className="flex-1 ml-[1px] mt-[1px]">
          <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {mock.movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
          <div className="block md:hidden flex-1"></div>
          <Divider className="md:mt-[46px] mb-[77px]"></Divider>
        </Stack>
      </div>
    </div>
  );
}

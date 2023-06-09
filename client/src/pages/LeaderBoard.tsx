import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useGetAllPlayerStatsQuery } from "../redux/api/gameApi";
import { PlayerStats } from "../types/types";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";

const LeaderBoard = () => {
  const { picture } = useSelector(selectAuth);
  const { data, error } = useGetAllPlayerStatsQuery();
  const location = useLocation();

  return (
    <section className=" flex justify-center items-center min-h-screen  ">
      <div className="w-[600px] p-5  bg-dark rounded-md ">
        <div className="flex items-center gap-1 mb-2 text-white">
          <Link to="/" className=" flex items-center gap-1 ">
            home
          </Link>
          /
          {location?.pathname && (
            <span className="text-white">
              {location.pathname.split("/")[1]}
            </span>
          )}
        </div>
        <h1 className="text-2xl mb-4 text-white font-bold ">
          Top Rated Players
        </h1>

        {data?.length !== 0 ? (
          <div className="overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="p-3  md:text-md text-letter text-sm font-semibold tracking-wide text-left">
                    Player
                  </th>

                  <th className="w-24 p-3  md:text-md text-letter text-sm font-semibold tracking-wide text-left">
                    Moves
                  </th>
                  <th className="w-32 p-3  md:text-md text-letter text-sm font-semibold tracking-wide text-left">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green ">
                {data?.map((player: PlayerStats) => (
                  <tr key={player.id} className="bg-letter">
                    <td className="p-3 text-sm text-dark font-semibold whitespace-nowrap flex gap-3 items-center">
                      {player?.picture ? (
                        <img
                          className="w-8 h-8 rounded-full"
                          src={player.picture}
                          alt=""
                        />
                      ) : (
                        <FaUserCircle className="text-black text-3xl" />
                      )}

                      {player.username}
                    </td>

                    <td className="p-3 text-sm font-semibold whitespace-nowrap">
                      {player.total_moves}
                    </td>
                    <td className="p-3 text-sm font-semibold whitespace-nowrap">
                      {player.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-white font-semibold ">No games saved yet</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #1000
                </a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Delivered
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div className="text-sm font-medium text-black">$200.00</div>
          </div>
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #1001
                </a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Shipped
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div className="text-sm font-medium text-black">$200.00</div>
          </div>
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #1002
                </a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                  Canceled
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div className="text-sm font-medium text-black">$200.00</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LeaderBoard;

import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface PlayerAttributes {
  name: string;
  rank: number;
  rankPoint: number;
  matchCount: number;
}

const API_KEY = process.env.NEXT_PUBLIC_PUBG_API_KEY;
const BASE_URL = "https://api.pubg.com/shards";

const fetchTopPlayers = async (
  platform: string,
  region: string
): Promise<PlayerAttributes[]> => {
  const response = await fetch(
    `${BASE_URL}/${platform}/leaderboards/${region}/squad-fpp`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/vnd.api+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  console.log(data);
  const players = data.data || [];
  return players.slice(0, 10).map((player: any) => ({
    name: player.attributes.name,
    rank: player.attributes.rank,
    rankPoint: player.attributes.rankPoints,
    matchCount: player.attributes.roundsPlayed,
  }));
};

export const useTopPlayers = (
  platform: string,
  region: string
): UseQueryResult<PlayerAttributes[], Error> => {
  return useQuery({
    queryKey: [platform, region],
    queryFn: () => fetchTopPlayers(platform, region),
  });
};

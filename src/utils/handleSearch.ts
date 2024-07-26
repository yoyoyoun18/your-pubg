import useSearchStore from "../store/searchStore";

const handleSearch = async (input: string) => {
  const setSearchQuery = useSearchStore.getState().setSearchQuery;
  const setSearchResults = useSearchStore.getState().setSearchResults;

  setSearchQuery(input);
  try {
    const response = await fetch(
      `/api/pubg/player?platform=steam&playerName=${input}`
    );
    if (!response.ok) {
      throw new Error("Player data not found");
    }
    const data = await response.json();
    setSearchResults(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error");
    }
    setSearchResults(null);
  }
};

export default handleSearch;

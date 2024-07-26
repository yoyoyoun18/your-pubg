import handleSearch from "@/utils/handleSearch";
import useSearchStore from "@/store/searchStore";
import fetchMock from "jest-fetch-mock";

jest.mock("@/store/searchStore", () => ({
  __esModule: true,
  default: {
    getState: jest.fn(),
  },
}));

describe("handleSearch", () => {
  const mockSetSearchQuery = jest.fn();
  const mockSetSearchResults = jest.fn();

  beforeEach(() => {
    fetchMock.resetMocks();
    (useSearchStore.getState as jest.Mock).mockReturnValue({
      setSearchQuery: mockSetSearchQuery,
      setSearchResults: mockSetSearchResults,
    });
  });

  it("fetches and sets search results on successful search", async () => {
    const mockData = { playerName: "testPlayer", platform: "steam" };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    await handleSearch("testPlayer");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/pubg/player?platform=steam&playerName=testPlayer"
    );
    expect(mockSetSearchQuery).toHaveBeenCalledWith("testPlayer");
    expect(mockSetSearchResults).toHaveBeenCalledWith(mockData);
  });

  it("handles fetch error correctly", async () => {
    fetchMock.mockResponseOnce("", { status: 404 });

    await handleSearch("testPlayer");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/pubg/player?platform=steam&playerName=testPlayer"
    );
    expect(mockSetSearchQuery).toHaveBeenCalledWith("testPlayer");
    expect(mockSetSearchResults).toHaveBeenCalledWith(null);
  });
});

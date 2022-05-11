import { act, renderHook } from "@testing-library/react-hooks";
import { cleanup } from "@testing-library/react";
import { useStore } from "./useStore";

describe("useStore", () => {
    afterEach(() => {
        // You can chose to set the store's state to a default value here.
        jest.resetAllMocks();
        cleanup();
    });

    it("The addFavorite function correctly sets the favoritesId variable.", () => {
        const { result } = renderHook(() => useStore((state) => state));

        act(() => {
            result.current.addFavorite(1);
        });

        expect(result.current.favoritesId).toEqual([1]);
    });

    it("The removeFavorite function correctly sets the favoritesId variable.", () => {
        const { result } = renderHook(() => useStore((state) => state));

        act(() => {
            result.current.removeFavorite(1);
        });

        expect(result.current.favoritesId).toEqual([]);
    });
});
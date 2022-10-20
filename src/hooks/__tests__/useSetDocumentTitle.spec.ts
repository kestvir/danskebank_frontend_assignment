import { renderHook } from "@testing-library/react";

import { useSetDocumentTitle } from "..";

describe("useSetDocumentTitle", () => {
  it("sets document title", () => {
    renderHook(() => useSetDocumentTitle("Title"));

    expect(global.window.document.title).toBe("Title");
  });
});

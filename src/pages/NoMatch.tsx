import { useNavigate } from "react-router-dom";

import { useSetDocumentTitle } from "@/hooks";

export const NoMatch = () => {
  useSetDocumentTitle("Page not found");

  const navigate = useNavigate();
  const handleClickGoToPreviousPage = () => navigate(-1);

  return (
    <div className="d-flex flex-column place-content-center justify-content-center text-center no-match h-100">
      <h1>Page does not exist</h1>
      <p>The page you tried to access is not&nbsp;available.</p>
      <p>It can be caused by an outdated link or a typo.</p>
      <button
        type="button"
        className="no-match__btn btn"
        onClick={handleClickGoToPreviousPage}
      >
        Go back
      </button>
    </div>
  );
};

import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

import { DEFAULT_PAGE } from "@/constants";

export const useAgentsFilters = () => {
  return useQueryStates({
    //improve UX by clearing the search when the user navigates to a new page
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger
      .withDefault(DEFAULT_PAGE)
      .withOptions({ clearOnDefault: true }),
  });
};

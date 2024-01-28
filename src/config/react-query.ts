import type { DefaultOptions } from '@tanstack/react-query'

import { QueryClient } from '@tanstack/react-query'

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: true,
  },
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })

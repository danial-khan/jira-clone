import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { CurrentUserResponse, CurrentUser } from "@/types/user";

export const useCurrent = () => {
  const query = useQuery<CurrentUser | null>({
    queryKey: ["current"],
    queryFn: async () : Promise<CurrentUser | null> => {
      const response = await client.api.auth.current.$get();
      if (!response.ok) {
        return null;
      }
    
      const responseData = await response.json() as CurrentUserResponse;
      // console.log(responseData)
      return responseData.data;
      
    },
  });
  return query;
};

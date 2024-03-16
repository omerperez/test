import { Alert } from "@/components/Alert";
import { QUERY_KEYS } from "@/constants";
import { usersApi } from "@/services/api";
import { User } from "@/types";
import { Box, Divider, Link, Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

interface UserDetailsProps {
  userId: number;
}
export const UserDetails = ({ userId }: UserDetailsProps) => {
  const { data, status } = useQuery<User>({
    queryKey: [QUERY_KEYS.USERS, userId],
    queryFn: async () => await usersApi.getUserById(userId),
  });

  if (status === "pending") {
    return <Skeleton width={100} height={18} />;
  }

  if (status === "error") {
    return <Alert text="Failed to load user information" severity="error" />;
  }

  return (
    <Box display="flex" gap={1} alignItems="center" fontSize={12}>
      <strong>{data.name}</strong>
      <Divider orientation="vertical" flexItem />
      <span>{data.email}</span>
      <Divider orientation="vertical" flexItem />
      <Link href={data.website} target="_blank" rel="noopener noreferrer">
        {data.website}
      </Link>
    </Box>
  );
};

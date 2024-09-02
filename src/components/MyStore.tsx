import { useGetUserProfileQuery } from '@/redux/api/userApi';
import Loader from './Loader';

export default function MyStore() {
  const { data } = useGetUserProfileQuery(undefined);
  if (!data) return <Loader />;
  return <div>{data?.data?.Shop[0]?.accessToken}</div>;
}

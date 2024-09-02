import { useEffect, useState } from 'react';

import CustomerTable from './CustomerTable';

import PaginatedComponent from '@/common/PaginatedComponent';
import { useGetCustomersQuery } from '@/redux/api/customerApi';

function Customers() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const { data } = useGetCustomersQuery({ limit, page });
  const customerList = data?.data?.data;

  useEffect(() => {
    if (data && limit) {
      const total = data?.data?.pagination?.total;

      setTotalPages(Math.ceil(total / limit));
    }
  }, [data, limit]);

  return (
    <div>
      <p className="py-2">Customers</p>
      <CustomerTable customerList={customerList} />
      <PaginatedComponent
        setCurrentPage={setPage}
        currentPage={page}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Customers;

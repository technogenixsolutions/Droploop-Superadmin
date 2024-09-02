/* eslint-disable react/self-closing-comp */

function Loader() {
  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="h-6 animate-pulse rounded-md bg-gray-300"></div>

      {/* Image */}
      <div className="h-48 w-full animate-pulse rounded-md bg-gray-300"></div>

      {/* Content lines */}
      <div className="h-4 animate-pulse rounded-md bg-gray-300"></div>
      <div className="h-4 animate-pulse rounded-md bg-gray-300"></div>
      <div className="h-4 animate-pulse rounded-md bg-gray-300"></div>
    </div>
  );
}

export default Loader;

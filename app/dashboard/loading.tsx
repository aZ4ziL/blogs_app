export default function Loading() {
  return (
    <section className="pt-[150px]">
      <div
        className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between animate-pulse"
        style={{ animationDuration: "1s" }}
      >
        <div>
          <div className="w-60 h-8 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
          <div className="w-72 h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
        <div className="w-32 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[0, 1, 2, 3, 4, 5].map((_value, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-600 rounded hover:shadow-md hover:shadow-gray-300 hover:dark:shadow-gray-600 animate-pulse"
              style={{ animationDuration: `1.${index}s` }}
            >
              <div className="w-full h-[300px] bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="p-4">
                <div className="w-40 h-5 bg-gray-300 dark:bg-gray-600 rounded-full mb-4"></div>
                <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-[80%] h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <div className="w-52 h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Loading() {
  return (
    <section className="pt-[150px]">
      <div className="w-40 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
      <div className="w-60 h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[0, 1, 2, 3, 4, 5].map((_value, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-600 rounded animate-pulse"
              style={{ animationDuration: `1.${index}s` }}
            >
              <div className="w-full h-[300px] bg-gray-300 dark:bg-gray-600"></div>
              <div className="p-4">
                <div className="w-40 h-5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-40 h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <div className="w-40 h-5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Loading() {
  return (
    <section
      className="pt-[150px] animate-pulse"
      style={{ animationDuration: "1s" }}
    >
      <div className="w-52 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mb-10"></div>

      <div className="border-t border-t-gray-300 dark:border-t-gray-600 pt-5">
        {[0, 1, 2, 3, 4, 5].map((_value, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-10 gap-2">
            <div className="w-full md:w-[300px]">
              <div className="w-32 h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
            <div className="w-full">
              <div className="w-52 h-8 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-32 h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              </div>
              <div className="text-lg font-light">
                <div className="w-full h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-full h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-full h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
                <div className="w-[60%] h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

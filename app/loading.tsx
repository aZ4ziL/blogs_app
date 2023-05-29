export default function Loading() {
  return (
    <div className="w-full h-screen">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[50%] text-center animate-pulse"
        style={{ animationDuration: "1s" }}
      >
        <div className="flex items-center justify-center mb-2">
          <div className="w-80 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
          <div className="w-[60%] h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
          <div className="w-full h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
          <div className="w-[40%] h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        </div>
      </div>
    </div>
  );
}

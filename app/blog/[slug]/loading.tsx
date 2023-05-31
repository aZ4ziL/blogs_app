export default function Loading() {
  return (
    <section
      className="pt-[150px] animate-pulse"
      style={{ animationDuration: "1s" }}
    >
      <div className="w-60 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
      <div className="flex flex-col items-start my-3">
        <div className="flex flex-col items-center gap-1">
          <div className="w-32 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
          <div className="w-32 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        </div>
      </div>
      <div className="pt-[50px] border-t border-t-gray-300 dark:border-t-gray-600 mb-4">
        <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        <div className="w-[80%] h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
      </div>
      <div className="pt-[50px] border-t border-t-gray-300 dark:border-t-gray-600 mb-4">
        <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
        <div className="w-[80%] h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
      </div>
    </section>
  );
}

export const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-7 gap-6 w-full bg-slate-200 dark:bg-slate-700 py-4 rounded-lg animate-pulse text-sm ">
      <div className="col-span-2 ml-8 h-5 bg-slate-300 dark:bg-slate-600 rounded-full w-36"></div>
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className=" h-5 bg-slate-300 dark:bg-slate-600 rounded-full w-20 justify-self-center"
        ></div>
      ))}
    </div>
  )
}

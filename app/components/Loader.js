const LoadingBouncer = () => (
  <div className="flex items-center justify-center w-full h-[260px] animate-bounce">
    <div className="flex relative h-6 w-6 mr-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
      <span className="relative inline-flex rounded-full h-6 w-6 bg-primary-active"></span>
    </div>

    <div className="flex relative h-6 w-6 mr-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
      <span className="relative inline-flex rounded-full h-6 w-6 bg-primary-active"></span>
    </div>

    <div className="flex relative h-6 w-6 mr-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
      <span className="relative inline-flex rounded-full h-6 w-6 bg-primary-active"></span>
    </div>
  </div>
);

export default LoadingBouncer;
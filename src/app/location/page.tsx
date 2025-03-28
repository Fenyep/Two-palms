export default function Location() {
  return (
    <div className="w-screen mt-24 grid grid-cols-2 px-6 md:px-0 md:grid-cols-4 gap-y-3.5 gap-x-4 md:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-72 w-full bg-blue-300"></div>
      ))}
    </div>
  );
}

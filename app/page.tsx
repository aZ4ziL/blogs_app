async function fetchInfo() {
  const response = await fetch(process.env.SERVER_LOCAL + "/api/info", {
    cache: "no-store",
  });

  return await response.json();
}

export default async function Home() {
  const info = await fetchInfo();

  return (
    <>
      <header className="w-full h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[50%] text-center">
          <h1 className="text-5xl font-bold">{info.title}</h1>
          <p className="text-2xl font-light">{info.description}</p>
        </div>
      </header>
    </>
  );
}

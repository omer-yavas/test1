import Link from "next/link";
const MediaMobileTwo = () => {
  const urls = [
    "/MemurlarNet-Turkiye.jpg",
    "/MemurlarNet.jpg",
    "/Milliyet.jpg",
    "/Sabah.jpg",
    "/Tavvim.png",
  ];
  return (
    <li className="flex gap-2 flex-wrap border items-center justify-center border-black ">
      {urls.map((item) => (
        <Link key={item} href="/">
          <img
            src={item}
            alt="mediaMobile"
            width={100}
            height={100}
            className="my-3 mx-3"
          />
        </Link>
      ))}
    </li>
  );
};

export default MediaMobileTwo;

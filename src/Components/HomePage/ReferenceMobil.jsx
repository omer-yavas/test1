import Link from "next/link";
import Image from "next/image";
const ReferenceMobil = ({ url }) => {
  return (
    <li className="flex flex-wrap items-center justify-center gap-2">
      <Link href="media.html">
        <Image
          width={90}
          height={40}
          alt="referencePhotos"
          src={url}
          className="my-3 mx-3"
        />
      </Link>
    </li>
  );
};

export default ReferenceMobil;

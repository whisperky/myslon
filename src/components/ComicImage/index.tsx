import { SyntheticEvent, useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

interface ComicImageProps {
  imageUrl: string;
}

export default function ComicImage({ imageUrl }: ComicImageProps) {
  const [imageSrc, setThumbnailSrc] = useState("");
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (imageUrl) {
      setCount(0);
      setThumbnailSrc(imageUrl);
    } else {
      // setThumbnailSrc('/logo.png')
    }
  }, []);

  function handleError(event: SyntheticEvent<HTMLImageElement, Event>): void {
    event.currentTarget.onerror = null;
    setError(true);

    if (count >= 1 && error && imageSrc.includes("ipfs.io")) {
      setThumbnailSrc(imageSrc.replace("ipfs.io", "chaingpt.mypinata.cloud"));
    } else if (error && imageSrc.includes("gateway.ipfs.io")) {
      setThumbnailSrc(imageSrc.replace("gateway.", ""));
    }
    setCount(count + 1);
  }

  return (
    <>
      <Image
        src={
          imageUrl?.includes("") ? imageUrl : imageUrl?.replace("gateway.", "")
        }
        alt="My Comic Image"
        width="100%"
        height="261px"
        objectFit="cover"
        loading="lazy"
        onError={handleError}
        fallbackSrc="/logo.png"
      />
    </>
  );
}

import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { imagesRoutes } from "./imagesRoutes";
export default function Banner() {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  return (
    <>
      {/* <Flex width="100vw" height="260px" position="relative">
        {imagesRoutes.map((image) => (
          <Image layout="fill" objectFit="cover" src={image.mobile} />
        ))}
      </Flex> */}
      {/* <Flex width="100vw" height="400px" position="relative">
        {imagesRoutes.map((image) => (
          <Image layout="fill" objectFit="cover" src={image.tablet} />
        ))}
      </Flex> */}
      <Flex width="100vw" height="570px" position="relative">
        {imagesRoutes.map((image) => (
          <Image layout="fill" objectFit="cover" src={image.desktop} />
        ))}
      </Flex>
    </>
  );
}

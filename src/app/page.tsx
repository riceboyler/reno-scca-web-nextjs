import { Box, VStack } from "styled-system/jsx";

export default function Home() {
  return (
    <VStack>
      <Box
        fontSize="3xl"
        fontFamily="Oswald"
        fontWeight="bold">
        Welcome to the Reno Region of the Sports Car Club of America(SCCA)!
      </Box>
      <video
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ maxWidth: "1200px" }}>
        <source
          src="videos/movie.webm"
          type="video/webm"
        />
      </video>
    </VStack>
  );
}

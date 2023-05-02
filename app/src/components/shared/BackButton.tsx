import { Row } from "@/lib/chakraUtils";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const BackButton = () => {
  return (
    <>
      <Box
        position={'absolute'}
        top={{ base: '10vh', xl: '8vh'}}
        right={{ base: '10vw', xl: '20vw'}}
        zIndex={999}
      >
        <Link href="/">
          <svg width="89" height="37" viewBox="0 0 89 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.872782" y="0.872782" width="86.6964" height="34.3294" rx="4.27537" stroke="#E3E0DC" strokeWidth="1.74556"/>
            <path d="M60.5137 19.7829C61.1564 19.7829 61.6774 19.2618 61.6774 18.6191C61.6774 17.9764 61.1564 17.4554 60.5137 17.4554L60.5137 19.7829ZM25.9432 17.7963C25.4888 18.2507 25.4888 18.9876 25.9432 19.442L33.349 26.8478C33.8035 27.3023 34.5403 27.3023 34.9948 26.8478C35.4492 26.3934 35.4492 25.6565 34.9948 25.2021L28.4118 18.6191L34.9948 12.0362C35.4492 11.5818 35.4492 10.8449 34.9948 10.3905C34.5403 9.93602 33.8035 9.93602 33.349 10.3905L25.9432 17.7963ZM60.5137 17.4554L26.7661 17.4554L26.7661 19.7829L60.5137 19.7829L60.5137 17.4554Z" fill="#E3E0DC"/>
          </svg>
          </Link>
      </Box>
    </>
  )
}

export default BackButton;
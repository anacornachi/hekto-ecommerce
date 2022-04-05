import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Box,
} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import generateBreadcrumb from '@utils/generateBreadcrumb';
import {useRouter} from 'next/router';

export type Props = {
  title: string;
};

export default function SubHeader({title}: Props) {
  const router = useRouter();

  return (
    <>
      <Box bg="pantonePurple" h={{base: '150px', lg: '286px'}}>
        <Container h="100%">
          <Flex h="100%" justify="center" direction="column">
            <Heading
              as="h1"
              fontFamily="josefin"
              color="navyBlue"
              fontSize={{base: '26px', lg: '36px'}}
            >
              {title}
            </Heading>
            <Flex mt={{base: '5px', lg: 0}}>
              <Breadcrumb separator=".">
                {generateBreadcrumb(router.asPath).map((page, key, array) =>
                  key + 1 < array.length ? (
                    <BreadcrumbItem key={key}>
                      <BreadcrumbLink
                        href={page.link}
                        fontSize={{base: '14px', lg: '16px'}}
                      >
                        {page.name}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  ) : (
                    <BreadcrumbItem key={key}>
                      <BreadcrumbLink
                        href={page.link}
                        color="pink"
                        fontSize={{base: '14px', lg: '16px'}}
                      >
                        {page.name}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  )
                )}
              </Breadcrumb>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

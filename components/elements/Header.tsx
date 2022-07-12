import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SnsLinks } from './SnsLinks'
import { Wallet } from './Wallet'
import { NftContractContext } from '../../contexts/NftContractProvider'
import { useContext } from 'react'

const Component: React.FC = () => {
  const router = useRouter()
  const store = useContext(NftContractContext)

  return (
    <Box
      as="header"
      alignItems="center"
      position={'fixed'}
      background="rgba(255, 255, 255, 0.95)"
      backdropBlur="md"
      w="full"
      zIndex={10}
    >
      <Flex
        maxW={'8xl'}
        justifyContent="space-between"
        h={{ base: 16, md: 20 }}
        px={{ base: 4, xl: 3, '2xl': 0 }}
        alignItems="center"
        mx="auto"
      >
        <Link href="/">
          <Text textStyle="logo" cursor="pointer">
            NFTDrop
          </Text>
        </Link>
        <Flex alignItems="center" gap={8}>
          <Box display={{ base: 'none', lg: 'block' }}>
           
          </Box>
          <Box display={{ base: 'none', lg: 'block' }}>
            <SnsLinks />
          </Box>
          <Box display={{ base: 'none', lg: 'block' }}>
            <Wallet />
          </Box>
          <Box
            display={{ base: 'block', lg: 'none' }}
            height="32px"

          >

          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export { Component as Header }


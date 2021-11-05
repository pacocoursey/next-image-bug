import MyCoolImage from 'my-cool-image'
import NextImage from 'next/image'

const Page = () => {
  return (
    <div>
      <h1>Image test</h1>

      <MyCoolImage
        src="https://i.imgur.com/CgezKMb.jpg"
        width={1404}
        height={936}
      />

      {/* <NextImage
        src="https://i.imgur.com/CgezKMb.jpg"
        width={1404}
        height={936}
      /> */}
    </div>
  )
}

export default Page

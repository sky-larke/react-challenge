interface BannerProps {
  title: string
}

const Banner = ({ title }: BannerProps) => (
  <h1 className="text-2xl font-bold text-center bg-blue-700 text-white py-4 mb-6">{title}</h1>
)
export default Banner;
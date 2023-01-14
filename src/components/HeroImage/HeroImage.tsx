
interface IHeroImageProps {
  height: number
  path: string
}

export const HeroImage = ({
  height,
  path
}: IHeroImageProps) => {
  return (
    <img className="hero-image" height={400} src={path} />
  )
}
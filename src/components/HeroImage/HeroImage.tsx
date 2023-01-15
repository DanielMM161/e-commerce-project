import { StyleHeroImage } from "./styles"

interface IHeroImageProps {
  path: string
  title?: string
  height?: number
}

export const HeroImage = ({
  path,
  title = '',
  height = 440
}: IHeroImageProps) => {
  return (
    <StyleHeroImage>
      {title.trim() !== '' ? (
        <h2>{title}</h2>
      ): null}
      <img className="hero-image" src={path} height={height} />
    </StyleHeroImage>
  )
}
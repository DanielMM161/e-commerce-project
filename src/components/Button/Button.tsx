import { SvgIconTypeMap } from "@mui/material"

interface Props {
  title: string
  className: string
  onClick: () => void
  children: React.ReactNode
}

export const Button = ({
  title,
  className,
  onClick,
  children
}: Props) => {
  return (
    <button className={className} onClick={() => onClick()}>
      {title}
      {children}
    </button>
  )
}
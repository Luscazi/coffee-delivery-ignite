import { ReactNode } from 'react'
import { InfoWithIconContainer, IconContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode
  iconColor: string
  text: string | ReactNode
}

export function InfoWithIcon({ icon, iconColor, text }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconColor} >{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
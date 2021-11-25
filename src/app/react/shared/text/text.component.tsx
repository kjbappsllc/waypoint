import React from "react"

export type TextProps = {
  text: string;
}

export const Text: React.FC<TextProps> = (props: TextProps) => {
  const { text } = props
  return (
    <div>{text}</div>
  )
}
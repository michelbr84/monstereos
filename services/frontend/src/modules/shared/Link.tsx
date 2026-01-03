import * as React from "react"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"

interface LinkProps extends RouterLinkProps {
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

// Wrapper component to support className on Link
const Link: React.SFC<LinkProps> = props => {
  return <RouterLink {...props as any} />
}

export default Link

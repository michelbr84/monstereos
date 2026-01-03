import * as React from "react"
import { LinkProps } from "react-router-dom"

declare module "react-router-dom" {
  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to:
      | string
      | { pathname: string; search?: string; hash?: string; state?: any }
    replace?: boolean
    innerRef?: (node: HTMLAnchorElement | null) => void
  }
}

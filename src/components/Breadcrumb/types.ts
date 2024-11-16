export interface BreadcrumbItemType {
  path?: string
  title: React.ReactNode
}

export interface BreadcrumbProps {
  items?: BreadcrumbItemType[]
  separator?: React.ReactNode
}

export interface CardTag {
    label: string
  }
  
  export interface Card {
    tags?: CardTag[]
    title: string
    description: string
    image: string
    onClick?: () => void
    className?: string;
  }
  
  
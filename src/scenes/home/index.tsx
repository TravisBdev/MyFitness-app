import { SelectedPage } from '@/shared/types'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

function Home({setSelectedPage}: Props) {
  return (
    <div>Home</div>
  )
}

export default Home
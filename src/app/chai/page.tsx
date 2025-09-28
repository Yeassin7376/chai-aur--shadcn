import { Button } from "@/components/ui/button"

const ChaiPage = () => {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>ChaiPage</div>
      <Button variant="default" className="my-3">shadcn btn</Button>
      <Button variant="chai" size="sm">chai btn</Button>
    </main>
  )
}

export default ChaiPage
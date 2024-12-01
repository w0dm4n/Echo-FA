import { reglement } from "@/config/reglement"
import { List } from "./(components)/list"

export default function Page() {
  return (
    <div>
      <h1>Règlement</h1>
      <List list={reglement} />
    </div>
  )
}

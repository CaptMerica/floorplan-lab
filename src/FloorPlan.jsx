import Bath from "./Bath"
import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"
import Kitchen from "./Kitchen"

function FloorPlan(props) {
  return (
    <div>
      <Bedroom num={1}/>
      <Kitchen />
      <Bath size={"Full"}/>
      <Bedroom num={2}/>
      <LivingRoom />
      <Bath size={"Half"}/>
      <Bedroom num={3}/>
    </div>
  )
}

export default FloorPlan
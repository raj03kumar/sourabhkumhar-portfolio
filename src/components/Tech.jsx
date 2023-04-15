import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { BallCanvas } from "./canvas"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => {
        return (
          <div className="w-28 h-28" key={index}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
      })}
    </div>
  )
}

export default SectionWrapper(Tech, "")
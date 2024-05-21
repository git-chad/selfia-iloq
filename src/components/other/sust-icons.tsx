import { SUST_STATS } from "../../../utils/constants"

const SustIcons = () => {
  return (
    <div className="flex flex-col gap-6">
        {SUST_STATS.map((stat, idx) => (
            <div className="flex gap-4 items-start justify-start">
                <img src={stat.icon} alt={"ahorros " + stat.desc} />
                <div className="flex flex-col">
                    <p className="text-2xl font-semibold">{stat.stat} {stat.measure}</p>
                    <p>{stat.desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SustIcons
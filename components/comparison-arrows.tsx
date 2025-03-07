import { TrendingUp, TrendingDown } from "lucide-react"

export function ComparisonArrows() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
      <div className="flex items-center gap-3 text-fourup-orange bg-white/10 rounded-full py-2 px-6">
        <TrendingUp className="h-6 w-6" />
        <span className="font-semibold text-lg">FourUp</span>
      </div>
      <div className="flex items-center gap-3 text-fourup-red bg-white/10 rounded-full py-2 px-6">
        <TrendingDown className="h-6 w-6" />
        <span className="font-semibold text-lg">Marketing amador</span>
      </div>
    </div>
  )
}


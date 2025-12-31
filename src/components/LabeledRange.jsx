import { formatPrice } from "../utils";
import { useState } from "react";

export const LabeledRange = ({labelText, name, size}) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div>
      <label htmlFor={name} className="label cursor-pointer">
        <span className="text-neutral-content">{labelText}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input type="range" step={step} name={name} id={name} min={0} value={selectedPrice} max={maxPrice} onChange={(e) => setSelectedPrice(e.target.value)} className={`range range-primary range-${size}`} />
      <div className="w-full flex justify-between px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  )
}
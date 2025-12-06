import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import type { ModelPick } from "../types/bets";

export type RiskProfile = "conservative" | "standard" | "aggressive";

export interface BetSlipItem {
  id: string;           // unique for slip (pickId + timestamp)
pick: ModelPick;
  stake: number;        // computed stake in dollars
}

interface BetSlipContextValue {
bankroll: number;
riskProfile: RiskProfile;
items: BetSlipItem[];
setBankroll: (value: number) => void;
setRiskProfile: (value: RiskProfile) => void;
addPick: (pick: ModelPick) => void;
removeItem: (id: string) => void;
clearSlip: () => void;
}

const BetSlipContext = createContext<BetSlipContextValue | undefined>(
undefined
);

export const BetSlipProvider = ({ children }: { children: ReactNode }) => {
  const [bankroll, setBankroll] = useState<number>(2500); // default
const [riskProfile, setRiskProfile] = useState<RiskProfile>("standard");
const [items, setItems] = useState<BetSlipItem[]>([]);

const riskMultiplier: Record<RiskProfile, number> = {
    conservative: 0.5,
    standard: 1,
    aggressive: 1.5,
};

const addPick = (pick: ModelPick) => {
    // stake = bankroll * kellyFraction * riskMultiplier
    const baseStake =
      bankroll * pick.kellyFraction * riskMultiplier[riskProfile];

    const stake = Math.round(baseStake * 100) / 100; // 2 decimals

    const newItem: BetSlipItem = {
    id: `${pick.id}-${Date.now()}`,
    pick,
    stake,
    };

    setItems((prev) => [...prev, newItem]);
};

const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
};

const clearSlip = () => setItems([]);

const value = useMemo(
    () => ({
    bankroll,
    riskProfile,
    items,
    setBankroll,
    setRiskProfile,
    addPick,
    removeItem,
    clearSlip,
    }),
    [bankroll, riskProfile, items]
);

return (
    <BetSlipContext.Provider value={value}>
    {children}
    </BetSlipContext.Provider>
);
};

export const useBetSlip = (): BetSlipContextValue => {
const ctx = useContext(BetSlipContext);
if (!ctx) {
    throw new Error("useBetSlip must be used within BetSlipProvider");
}
return ctx;
};

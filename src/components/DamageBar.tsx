import React from "react";
import { Sword, Shield } from "lucide-react";

interface DamageBarProps {
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
}

const DamageBar: React.FC<DamageBarProps> = ({
  totalDamageDealtToChampions,
  totalDamageTaken,
}) => {
  const totalDamage = totalDamageDealtToChampions + totalDamageTaken;
  const damageDealtPercentage =
    (totalDamageDealtToChampions / totalDamage) * 100;
  const damageTakenPercentage = (totalDamageTaken / totalDamage) * 100;

  return (
    <div className="w-full max-w-md bg-none rounded-md p-2 text-black text-xs">
      <div className="space-y-1">
        <div className="mb-1">
          <div className="flex justify-between items-center mb-0.5">
            <span className="text-2xs flex">
              <Sword className="w-4 h-4 mr-2" />{" "}
              {totalDamageDealtToChampions.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-sm h-1.5">
            <div
              className="bg-red-600 h-1.5 rounded-sm"
              style={{ width: `${damageDealtPercentage}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-0.5">
            <span className="text-2xs flex ">
              <Shield className="w-4 h-4 mr-2" />{" "}
              {totalDamageTaken.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-sm h-1.5">
            <div
              className="bg-purple-600 h-1.5 rounded-sm"
              style={{ width: `${damageTakenPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamageBar;

import React, { useState } from "react";

const skillTrees = {
  "Blade": ["Hard Hit", "Astute", "Trigger Slash", "Sword Tempest"],
  "Shot": ["Power Shot", "Moeba Shot", "Quick Draw", "Cross Fire"],
  "Magic": ["Magic: Arrow", "Magic: Wall", "Magic: Storm", "Magic: Finale"],
  "Martial": ["Smash", "Bash", "Sonic Wave", "Chakra"],
  "Dual Sword": ["Twin Slash", "Charging Slash", "Phantom Slash", "Shadowstep"],
  "Halberd": ["Deadly Spear", "Strike Stab", "Dragon Tooth", "Chronos Drive"],
  "Katana": ["Pulse Blade", "Zantei Settetsu", "Garyou Tensei", "Meikyo Shisui"],
  "Bare Hand": ["Martial Mastery", "Kick", "Fist Smash"],
  "Crusher": ["Earthbind", "Goliath Punch", "Rush"],
  "Magic Blade": ["Enchanted Spell", "Element Slash", "Resonance"],
  "Dark Power": ["Sacrifice", "Bloody Bite", "Dark Stinger"],
  "Priest": ["Bless", "Gloria", "Holy Light", "Guardian"],
  "Support": ["First Aid", "Recovery", "High Cycle"],
  "Shield": ["Protection", "Aegis", "Guard Strike", "P.Def"],
  "Dagger": ["Throwing Knife", "Spike Dart", "Gatling Knife", "Hidden Arm"],
  "Knuckle": ["Strong Chase Attack", "Martial Mastery", "Chariot"],
  "Mononofu": ["Issen", "Zantei Settetsu", "Tenryu Ransei"],
  "Hunter": ["Decoy Shot", "Bear Trap", "Nature’s Wonders"],
  "Alchemy": ["Item Synthesis", "Medicine Knowledge"],
  "Blacksmith": ["Refine Equipment", "Create Equipment"],
  "Survival": ["HP Boost", "MP Boost", "Sober Analysis"],
  "Battle": ["Attack Up", "Magic Up", "Short Rest"],
};

export default function SkillSimulator() {
  const [levels, setLevels] = useState({});

  const handleChange = (skill, value) => {
    const val = Math.max(0, Math.min(10, value));
    setLevels({ ...levels, [skill]: val });
  };

  const totalSP = Object.values(levels).reduce((a, b) => a + b, 0);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-1 border rounded p-2">
        <h2 className="text-xl font-bold mb-2">Skill Trees</h2>
        <ul className="space-y-1">
          {Object.keys(skillTrees).map((tree) => (
            <li key={tree}>
              <a href={`#${tree}`} className="text-blue-600 hover:underline">
                {tree}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-3 border rounded p-2">
        <h2 className="text-xl font-bold mb-2">Skill Simulator</h2>
        {Object.entries(skillTrees).map(([tree, skills]) => (
          <div key={tree} id={tree} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{tree}</h3>
            {skills.map((skill) => (
              <div key={skill} className="flex items-center mb-2 gap-2">
                <span className="w-40">{skill}</span>
                <button
                  onClick={() =>
                    handleChange(skill, (levels[skill] || 0) - 1)
                  }
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={levels[skill] || 0}
                  onChange={(e) =>
                    handleChange(skill, parseInt(e.target.value) || 0)
                  }
                  className="w-16 border rounded p-1 text-center"
                />
                <button
                  onClick={() =>
                    handleChange(skill, (levels[skill] || 0) + 1)
                  }
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-4 font-bold">Total SP: {totalSP}</div>
      </div>
    </div>
  );
}

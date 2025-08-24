const REALMS = {
   MORTAL: {
      name: "Смертный",
      power: 1000,
      levels: 9,
      next: "BIRTH",
      breakthroughConditions: {
         3: { type: "elixir", required: "body_refinement_elixir" },
         6: { type: "technique", required: "basic_meditation" },
         9: { type: "combo", requirements: ["elixir", "technique"] }
      },
      description: "Обычный смертный, только начинающий путь cultivation"
   },

   BIRTH: {
      name: "Зарождение",
      power: 5000,
      levels: 9,
      next: "DISCIPLE",
      breakthroughConditions: {
         3: { type: "elixir", required: "mid_qi_elixir" },
         6: { type: "technique", required: "iron_body" },
         9: {
            type: "combo",
            requirements: ["elixir", "technique", "low_spirit_stone"]
         }
      },
      description: "Пробуждение внутренней энергии, первые шаги в cultivation"
   },

   DISCIPLE: {
      name: "Ученик",
      power: 15000,
      levels: 9,
      next: "WARRIOR",
      breakthroughConditions: {
         3: { type: "elixir", required: "advanced_qi_elixir" },
         6: { type: "technique", required: "energy_circulation" },
         9: { type: "combo", requirements: ["elixir", "artifact", "technique"] }
      },
      description: "Ученик, овладевающий основами управления ци"
   },

   WARRIOR: {
      name: "Воин",
      power: 50000,
      levels: 9,
      next: "MASTER",
      breakthroughConditions: {
         3: { type: "elixir", required: "warrior_elixir" },
         6: { type: "technique", required: "battle_sense" },
         9: {
            type: "combo",
            requirements: ["elixir", "artifact", "special_item", "technique"]
         }
      },
      description: "Боец, способный применять ци в сражениях"
   },

   MASTER: {
      name: "Мастер",
      power: 150000,
      levels: 9,
      next: "LORD",
      breakthroughConditions: {
         3: { type: "elixir", required: "master_elixir" },
         6: { type: "technique", required: "inner_sight" },
         9: {
            type: "combo",
            requirements: [
               "rare_elixir",
               "ancient_artifact",
               "advanced_technique"
            ]
         }
      },
      description: "Мастер, тонко чувствующий потоки энергии"
   },

   LORD: {
      name: "Лорд",
      power: 500000,
      levels: 9,
      next: "KING",
      breakthroughConditions: {
         3: { type: "elixir", required: "lord_elixir" },
         6: { type: "technique", required: "energy_control" },
         9: {
            type: "combo",
            requirements: [
               "divine_elixir",
               "legendary_artifact",
               "supreme_technique"
            ]
         }
      },
      description: "Правитель, управляющий энергией на больших расстояниях"
   },

   // Большой скачок мощи - Война
   KING: {
      name: "Король",
      power: 2000000,
      levels: 9,
      next: "EMPEROR",
      breakthroughConditions: {
         3: { type: "elixir", required: "king_elixir" },
         6: { type: "technique", required: "royal_presence" },
         9: {
            type: "combo",
            requirements: [
               "king_elixir",
               "royal_artifact",
               "royal_technique",
               "tribulation"
            ]
         }
      },
      description: "Король, чья мощь может влиять на целые регионы"
   },

   EMPEROR: {
      name: "Император",
      power: 8000000,
      levels: 9,
      next: "ANCESTOR",
      breakthroughConditions: {
         3: { type: "elixir", required: "emperor_elixir" },
         6: { type: "technique", required: "imperial_will" },
         9: {
            type: "combo",
            requirements: [
               "emperor_elixir",
               "imperial_artifact",
               "imperial_technique",
               "great_tribulation"
            ]
         }
      },
      description: "Император, чья сила простирается через континенты"
   },

   ANCESTOR: {
      name: "Предок",
      power: 30000000,
      levels: 9,
      next: "IMMORTAL",
      breakthroughConditions: {
         3: { type: "elixir", required: "ancestor_elixir" },
         6: { type: "technique", required: "ancestral_memory" },
         9: {
            type: "combo",
            requirements: [
               "ancestor_elixir",
               "ancestral_artifact",
               "ancestral_technique",
               "heavenly_tribulation"
            ]
         }
      },
      description: "Древний предок, почти достигший бессмертия"
   },

   // Начало истинного бессмертия - огромный скачок мощи
   IMMORTAL: {
      name: "Бессмертный",
      power: 150000000,
      levels: 9,
      next: "TRANSCENDENT",
      breakthroughConditions: {
         1: { type: "special", required: "immortal_spark" },
         3: { type: "elixir", required: "immortal_elixir" },
         6: { type: "technique", required: "immortal_body" },
         9: {
            type: "combo",
            requirements: [
               "immortal_elixir",
               "immortal_artifact",
               "immortal_technique",
               "immortal_tribulation"
            ]
         }
      },
      description: "Истинный бессмертный, преодолевший смерть"
   },

   TRANSCENDENT: {
      name: "Возвышенный",
      power: 800000000,
      levels: 9,
      next: "GOD",
      breakthroughConditions: {
         1: { type: "special", required: "transcendent_insight" },
         3: { type: "elixir", required: "transcendent_elixir" },
         6: { type: "technique", required: "transcendent_will" },
         9: {
            type: "combo",
            requirements: [
               "transcendent_elixir",
               "transcendent_artifact",
               "transcendent_technique",
               "cosmic_tribulation"
            ]
         }
      },
      description: "Возвышенный, превзошедший пределы смертных"
   },

   GOD: {
      name: "Бог",
      power: 5000000000,
      levels: 9,
      next: null,
      breakthroughConditions: {
         1: { type: "special", required: "divine_spark" },
         3: { type: "elixir", required: "divine_elixir" },
         6: { type: "technique", required: "divine_comprehension" },
         9: {
            type: "ultimate",
            requirements: [
               "all_previous",
               "universal_understanding",
               "creation_spark"
            ]
         }
      },
      description: "Божественное существо, способное творить миры"
   }
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { AnatomicalFeature, CorvidSpecies, CorvidSpeciesId, AnatomicalPartId } from '../types/corvid.ts';

export const CORVID_SPECIES: Record<CorvidSpeciesId, CorvidSpecies> = {
  rook: {
    id: 'rook',
    commonName: 'Rook',
    scientificName: 'Corvus frugilegus',
    tagline: 'The bare-faced, baggy-trousered farmyard roamer',
    sizeDescription: '45–47 cm (about the size of a Carrion Crow, but looks ragged)',
    habitat: 'Open farmland, pastures, roadside verges, and tall treetop colonies (rookeries)',
    voice: 'Low, nasal, drawn-out "Caaah... caaah!"—sounds raspier than a crow',
    socialClue: 'Almost always in sociable flocks. "A crow in a crowd is a rook!"',
    definingPair: [
      'Bare chalky-white skin at the base of its long, pointed bill',
      'Shaggy, loose "baggy trousers" feathering hanging over its thighs'
    ],
    friendScript:
      'Look closely at its face: see that bare, pale greyish-white patch around the beak where feathers should be? And look at its legs—it looks like it\'s wearing loose baggy trousers! That proves it\'s an adult rook, not a crow.',
    colorAccent: 'amber'
  },
  crow: {
    id: 'crow',
    commonName: 'Carrion Crow',
    scientificName: 'Corvus corone',
    tagline: 'The sleek, solitary sentinel with neat black feathers',
    sizeDescription: '45–47 cm (medium size, sturdy and compact build)',
    habitat: 'Gardens, urban parks, farmland, hills, and woodland edges everywhere',
    voice: 'Harsh, abrupt "Caw! Caw! Caw!"—usually delivered in sharp bursts of 3 or 4',
    socialClue: 'Usually solitary or in devoted pairs. Rarely gathers in large feeding flocks',
    definingPair: [
      'Heavy all-black beak with bristly black feathers covering nostrils (no bare skin)',
      'Sleek, tidy thigh feathers like tailored slim trousers'
    ],
    friendScript:
      'Notice how neat and tidy it looks: its heavy black beak has neat black bristles covering its nostrils all the way down, with zero bare skin. Its leg feathers are also neatly tucked against its body like tailored trousers. That\'s a true Carrion Crow.',
    colorAccent: 'sky'
  },
  raven: {
    id: 'raven',
    commonName: 'Common Raven',
    scientificName: 'Corvus corax',
    tagline: 'The giant highland king with a diamond tail & bearded throat',
    sizeDescription: '60–67 cm (huge! Size of a Common Buzzard with a 1.2–1.5m wingspan)',
    habitat: 'Wild moorlands, rocky cliffs, mountain crags, coasts, and increasingly wooded lowlands',
    voice: 'Deep, hollow, resonant bell-like "Pruk! Pruk!" or "Cronk!" audible over a mile away',
    socialClue: 'Solitary pairs guarding enormous territories. Performs acrobatic aerial barrel rolls',
    definingPair: [
      'Pronounced wedge- or diamond-shaped tail in flight (pointed in the middle)',
      'Shaggy, spiky throat hackles that puff out like a thick beard'
    ],
    friendScript:
      'Notice two unmistakable giveaways: its throat feathers are long and spiky like a ragged beard (hackles), and when it takes off, its tail is shaped like a distinct diamond or wedge, not flat! Plus, it\'s as massive as a bird of prey.',
    colorAccent: 'purple'
  },
  jackdaw: {
    id: 'jackdaw',
    commonName: 'Western Jackdaw',
    scientificName: 'Corvus monedula',
    tagline: 'The jaunty, pigeon-sized chatterbox with pale silver eyes',
    sizeDescription: '33–35 cm (the smallest corvid, compact like a feral pigeon)',
    habitat: 'Chimneys, church towers, cliffs, gardens, and parkland trees',
    voice: 'Cheery, sharp, metallic "Chack! Chack!" or high-pitched "Jack!"',
    socialClue: 'Highly sociable, energetic fliers, often nesting in chimney pots in faithful lifelong pairs',
    definingPair: [
      'Striking silvery-white or icy-blue eyes that shine brightly against dark plumage',
      'Silvery-grey shawl/nape on the back of its neck contrasting with a black skullcap'
    ],
    friendScript:
      'Look at its face—see those piercing silver-white eyes? That\'s unique to the jackdaw! And notice the back of its head: it wears a distinct silvery-grey shawl around its neck. It\'s also noticeably small, just like a pigeon.',
    colorAccent: 'emerald'
  }
};

export const ANATOMICAL_FEATURES: AnatomicalFeature[] = [
  {
    id: 'beak',
    name: 'Beak & Nostrils',
    shortLabel: 'Beak Base',
    hotspotCoordinates: { x: 18, y: 32, labelPosition: 'left' },
    summaryRule: 'Bare chalky-white base = Rook. Black bristles covering nostrils = Crow.',
    description:
      'The bill is the single most definitive identification feature when distinguishing adult rooks from crows and ravens.',
    speciesComparisons: {
      rook: {
        appearance: 'Long, pointed, dagger-like bill with a bare, chalky greyish-white patch of skin at the base and nostrils.',
        keyClue: 'Bare, featherless chalky skin at base of bill (adults). Looks like it dipped its face in flour.',
        distinguishingQuote: 'Looks pointed and grey-faced from digging in pastures.',
        bewareTraps: 'Juvenile rooks in their first summer/autumn keep black facial feathers until winter. Look at their leg trousers and flocking to confirm!'
      },
      crow: {
        appearance: 'Stout, heavy black bill with a curved tip. Covered with neat black bristly feathers over the nostrils right down to the bill.',
        keyClue: 'Feathers right up to the beak—never any bare skin or pale patches.',
        distinguishingQuote: 'Solid all-black, thick and chisel-like.',
        bewareTraps: 'A crow\'s beak is noticeably heavier than a rook\'s, with a more curved upper line (culmen).'
      },
      raven: {
        appearance: 'Enormous, deeply curved, heavy black bill. Has a very dense tuft of thick nasal bristles covering the top third like a thick moustache.',
        keyClue: 'Massive, thick, dagger-curved bill—much thicker than your thumb.',
        distinguishingQuote: 'Powerfully arched and massive, built like a hunting knife.',
        bewareTraps: 'So large that the bill profile alone looks raptor-like or primitive.'
      },
      jackdaw: {
        appearance: 'Short, neat, dainty black beak. Very compact with small bristly feathers at the nostrils.',
        keyClue: 'Small, neat, stubby triangular bill.',
        distinguishingQuote: 'Dainty and petite, suited for cracking seeds and picking small grubs.',
        bewareTraps: 'Much shorter and cuter than the heavy crow bill.'
      }
    }
  },
  {
    id: 'trousers',
    name: 'Legs & "Trousers" (Thigh Feathers)',
    shortLabel: 'Leg Trousers',
    hotspotCoordinates: { x: 50, y: 78, labelPosition: 'bottom' },
    summaryRule: 'Shaggy baggy trousers = Rook. Tidy, slim-cut thighs = Crow.',
    description:
      'How the feathers hang around the bird\'s thighs and upper legs is a legendary secret weapon for garden birdwatchers.',
    speciesComparisons: {
      rook: {
        appearance: 'Shaggy, loose, floppy feathers that droop down over the tops of the legs like old-fashioned baggy plus-fours or bloomers.',
        keyClue: 'Famous "baggy trousers" feathering over thighs.',
        distinguishingQuote: 'Looks like it\'s wearing loose pantaloons that flutter in the breeze.',
        bewareTraps: 'Even young rooks that haven\'t lost their facial feathers yet show these baggy trousers!'
      },
      crow: {
        appearance: 'Tidy, smooth leg feathering. The thighs are tightly feathered and tuck cleanly against the flanks.',
        keyClue: 'Sleek, tailored slim-fit thighs with clean silhouette.',
        distinguishingQuote: 'Looks smart and trim, like wearing tailored slim trousers.',
        bewareTraps: 'Never exhibits the drooping, fluffy skirt of a rook.'
      },
      raven: {
        appearance: 'Thick, powerful, heavily scaled black legs with heavy talons. Moderate feathering on upper thighs.',
        keyClue: 'Heavy, formidable legs built to walk across rough crags.',
        distinguishingQuote: 'Much thicker, heavier legs than any garden bird.',
        bewareTraps: 'When walking, it takes lumbering, ponderous steps or comical hops.'
      },
      jackdaw: {
        appearance: 'Delicate, short black legs. Walks with a brisk, jaunty, energetic little waddle or hop.',
        keyClue: 'Short, dainty legs; fast, jaunty, bouncy gait.',
        distinguishingQuote: 'Walks with an alert, cheeky strut on short slender legs.',
        bewareTraps: 'Noticeably shorter stride length than rooks or crows.'
      }
    }
  },
  {
    id: 'eye',
    name: 'Eye Colour',
    shortLabel: 'Eye Colour',
    hotspotCoordinates: { x: 26, y: 25, labelPosition: 'top' },
    summaryRule: 'Piercing silver-white eye = Jackdaw. Deep dark brown/black = Crow, Rook, & Raven.',
    description:
      'Eye colour is an instantaneous differentiator that you can spot through binoculars or on a sunny fence post.',
    speciesComparisons: {
      rook: {
        appearance: 'Dark brown, almost black iris with a dark pupil.',
        keyClue: 'Dark eye set inside the bare greyish facial skin.',
        distinguishingQuote: 'Dark eye surrounded by pale chalky skin makes the eye stand out.',
        bewareTraps: 'The pale facial skin can make the dark eye look stark and beady.'
      },
      crow: {
        appearance: 'Dark brown/black iris matching the dark plumage.',
        keyClue: 'Dark, watchful eye blends seamlessly into the black feathered head.',
        distinguishingQuote: 'Uniform dark iris; looks sleek and unified.',
        bewareTraps: 'Young crows may have greyish-brown irises for their first few months.'
      },
      raven: {
        appearance: 'Deep brown/black iris, intensely focused and calculating.',
        keyClue: 'Dark, piercing, deep-set eye.',
        distinguishingQuote: 'Stern, deep-set eye shielded under a prominent brow ridge.',
        bewareTraps: 'Reflects daylight sharply because of its size.'
      },
      jackdaw: {
        appearance: 'Striking, icy silver-white or pale porcelain blue iris with a sharp black pupil.',
        keyClue: 'Piercing pale silver-white eye! Unmistakable across any distance.',
        distinguishingQuote: 'Looks almost like an opal or pearl staring out from a dark face.',
        bewareTraps: 'Juveniles have dull blue eyes before turning brilliant silvery-white.'
      }
    }
  },
  {
    id: 'head-throat',
    name: 'Head Profile & Throat Feathers',
    shortLabel: 'Head & Throat',
    hotspotCoordinates: { x: 33, y: 35, labelPosition: 'right' },
    summaryRule: 'Spiky "bearded" hackles = Raven. Silvery neck shawl = Jackdaw. Peaked crown = Rook.',
    description:
      'The shape of the head and the texture of the throat feathers reveal distinct identities at a glance.',
    speciesComparisons: {
      rook: {
        appearance: 'Domed head with a steep, peaked forehead that slopes up from the bill into a tall rounded crown.',
        keyClue: 'Steep, peaked forehead silhouette.',
        distinguishingQuote: 'High forehead profile, giving it a thoughtful, scholarly look.',
        bewareTraps: 'Feathers on the throat are smooth, unlike a raven\'s shaggy throat.'
      },
      crow: {
        appearance: 'Neat, smoothly rounded head contour without abrupt bumps or tufts. Throat feathers lie flat.',
        keyClue: 'Smooth, unbroken curve from crown to nape and throat.',
        distinguishingQuote: 'Sleek and rounded like a motorcyclist\'s helmet.',
        bewareTraps: 'Can ruffle its head feathers in cold weather, but never has spiky throat plumes.'
      },
      raven: {
        appearance: 'Prominent throat "hackles"—long, lance-shaped, spiky feathers on the throat and neck that puff out like a ragged beard.',
        keyClue: 'Shaggy throat "beard" (hackles) displayed when calling or alert.',
        distinguishingQuote: 'Bearded, prehistoric appearance with thick neck muscles.',
        bewareTraps: 'The throat hackles are visible even at rest when perched.'
      },
      jackdaw: {
        appearance: 'Striking silvery-grey or ash-grey nape and sides of neck ("grey shawl"), contrasting with a glossy black cap on top.',
        keyClue: 'Two-tone contrast: silvery-grey neck shawl under a neat black skullcap.',
        distinguishingQuote: 'Looks like it\'s wearing a silvery silk clerical collar or shawl.',
        bewareTraps: 'The contrast is especially bright in morning or afternoon sun.'
      }
    }
  },
  {
    id: 'tail',
    name: 'Tail Shape (Perched & Flying)',
    shortLabel: 'Tail Shape',
    hotspotCoordinates: { x: 86, y: 72, labelPosition: 'right' },
    summaryRule: 'Diamond/wedge tail = Raven. Square/flat cutoff = Crow. Rounded fan = Rook.',
    description:
      'Tail shape is the golden rule used by birdwatchers whenever a black bird passes overhead against the clouds.',
    speciesComparisons: {
      rook: {
        appearance: 'Moderately rounded fan-shaped tail, slightly shorter in proportion to body than a crow\'s.',
        keyClue: 'Gently curved, rounded tail end.',
        distinguishingQuote: 'Curved trailing edge when spread in flight.',
        bewareTraps: 'Can look similar to crow if moulted, so check flight style and bare face.'
      },
      crow: {
        appearance: 'Distinctly square-ended, paddle-like tail with a nearly straight trailing edge.',
        keyClue: 'Straight, square cutoff tail.',
        distinguishingQuote: 'Looks chopped off flat at the end like a neat paddle.',
        bewareTraps: 'Never shows the pointed center of a raven\'s tail.'
      },
      raven: {
        appearance: 'Distinctive wedge-shaped or diamond-shaped tail, where the central feathers are noticeably longer than the outer ones.',
        keyClue: 'Pointed diamond / wedge tail! The #1 overhead flight ID clue.',
        distinguishingQuote: 'Forms a distinct triangular point in the center like a kite or wedge.',
        bewareTraps: 'Unmistakable in flight even high up against the sky.'
      },
      jackdaw: {
        appearance: 'Short, straight to slightly rounded tail proportionate to its small body.',
        keyClue: 'Compact, short square tail with quick, nimble twisting.',
        distinguishingQuote: 'Short and neat, allowing rapid aerobatics and chimney dives.',
        bewareTraps: 'Noticeably shorter tail than a crow.'
      }
    }
  },
  {
    id: 'size',
    name: 'Body Size & Silhouette',
    shortLabel: 'Overall Size',
    hotspotCoordinates: { x: 52, y: 50, labelPosition: 'top' },
    summaryRule: 'Giant like a buzzard = Raven. Compact like a pigeon = Jackdaw. Medium = Crow & Rook.',
    description:
      'Size relativity settles most casual garden arguments instantly when birds perch near familiar objects.',
    speciesComparisons: {
      rook: {
        appearance: 'Length 45–47 cm. Same body length as a crow, but narrower wings and often looks shaggier.',
        keyClue: 'Crow-sized, but often forages in boisterous parties of 10 to 100+ birds.',
        distinguishingQuote: 'Medium size, but almost never seen isolated from flock mates.',
        bewareTraps: 'In winter, rooks and jackdaws frequently feed together in mixed flocks!'
      },
      crow: {
        appearance: 'Length 45–47 cm. Solid, stocky, medium-sized corvid with broad wings and confident posture.',
        keyClue: 'Crow-sized; typically alone or in a pair patrolling a backyard or park.',
        distinguishingQuote: 'Medium build, sturdy and deliberate in every movement.',
        bewareTraps: 'Much bulkier than a jackdaw, but dwarfed by a raven.'
      },
      raven: {
        appearance: 'Length 60–67 cm with a massive 120–150 cm wingspan. Heavy barrel chest and broad wings.',
        keyClue: 'Huge! As large as a Common Buzzard or Red Kite.',
        distinguishingQuote: 'Massive, commanding presence. When it lands, it looks huge.',
        bewareTraps: 'People often underestimate raven size until seen next to a crow—raven is over twice the weight!'
      },
      jackdaw: {
        appearance: 'Length 33–35 cm, wingspan ~70 cm. Compact, neat, plump pigeon-sized bird.',
        keyClue: 'Pigeon-sized; noticeably the smallest of the all-black corvids.',
        distinguishingQuote: 'Little bird energy: quick hops, bouncy flight, and chatty calls.',
        bewareTraps: 'If a black corvid lands on your bird feeder or chimney pot, it is almost certainly a jackdaw.'
      }
    }
  },
  {
    id: 'wings',
    name: 'Plumage Sheen & Wings',
    shortLabel: 'Plumage Sheen',
    hotspotCoordinates: { x: 62, y: 60, labelPosition: 'bottom' },
    summaryRule: 'Oily purple-blue sheen = Rook & Raven. Glossy black/green = Crow. Two-tone grey/black = Jackdaw.',
    description:
      'In good light, the plumage sheen and feather texture reveal subtle differences in feather oils and structure.',
    speciesComparisons: {
      rook: {
        appearance: 'Silky plumage with a rich purplish-blue oily sheen in sunlight. Feathers appear slightly loose and textured.',
        keyClue: 'Strong purple-blue metallic sheen across wings and mantle.',
        distinguishingQuote: 'Feathers glow with deep violet and petrol blues under daylight.',
        bewareTraps: 'Juveniles are less glossy and lack the adult purple sheen.'
      },
      crow: {
        appearance: 'Clean, dense black plumage with a subtle greenish or purple-black gloss.',
        keyClue: 'Solid black with gentle bottle-green and subtle purple iridescence.',
        distinguishingQuote: 'Smooth, unbroken velvet black appearance.',
        bewareTraps: 'Old worn feathers before annual moult can look brownish-black.'
      },
      raven: {
        appearance: 'Deep lustrous blue-purple metallic sheen over jet black plumage. Broad wingtips with prominent primary "fingers".',
        keyClue: 'Intense midnight-blue and purple sheen; deep primary finger slots.',
        distinguishingQuote: 'Gleams like polished obsidian in flight.',
        bewareTraps: 'Long, widely splayed wingtips resemble eagle or buzzard silhouettes.'
      },
      jackdaw: {
        appearance: 'Dark charcoal body with a sharply contrasting silver-grey neck shawl and underparts.',
        keyClue: 'Distinctive two-tone colour scheme (charcoal body with pale grey nape).',
        distinguishingQuote: 'Not an all-black bird! Clear two-tone contrast.',
        bewareTraps: 'The silvery nape is visible even on cloudy overcast days.'
      }
    }
  },
  {
    id: 'plumage',
    name: 'Body Plumage & Sheen',
    shortLabel: 'Body Plumage',
    hotspotCoordinates: { x: 48, y: 58, labelPosition: 'right' },
    summaryRule: 'Oily purple-blue sheen = Rook & Raven. Glossy velvet black = Crow. Two-tone grey/black = Jackdaw.',
    description:
      'The texture, gloss, and colour contrast of the main body feathers provide immediate confirmation of identity.',
    speciesComparisons: {
      rook: {
        appearance: 'Silky, loose body plumage with a rich oily purplish-blue sheen in sunlight. Feathers on flanks and back look shaggy and textured.',
        keyClue: 'Rich oily purple-blue sheen; loose, ragged plumage texture.',
        distinguishingQuote: 'Feathers glow with vivid oily violet-blue tones and look loosely layered.',
        bewareTraps: 'Juveniles are less glossy and lack the adult purple sheen.'
      },
      crow: {
        appearance: 'Dense, immaculate velvet-black body plumage with a subtle greenish or purple-black gloss.',
        keyClue: 'Neat, tidy, uniform velvet black with subtle bottle-green gloss.',
        distinguishingQuote: 'Smooth, unbroken velvet black appearance with immaculate feathering.',
        bewareTraps: 'Worn feathers before summer moult can look brownish-black.'
      },
      raven: {
        appearance: 'Massive barrel-chested build with intense midnight-blue and violet metallic iridescence over jet black plumage.',
        keyClue: 'Lustrous blue-purple metallic iridescence; powerful barrel chest.',
        distinguishingQuote: 'Gleams like polished obsidian with massive chest and shoulder bulk.',
        bewareTraps: 'So heavily built that perched profile looks raptor-like.'
      },
      jackdaw: {
        appearance: 'Distinctive two-tone body: dark slate-charcoal back and wings contrasting with pale smoky-grey belly and underparts.',
        keyClue: 'Two-tone contrast: slate back with paler smoky-grey belly and silvery nape.',
        distinguishingQuote: 'Not an all-black bird! Clear two-tone charcoal and grey contrast.',
        bewareTraps: 'The pale silvery-grey underbody is visible even in low light.'
      }
    }
  }
];

/**
 * Returns two undeniable physical features to explain to friends why a bird is a specific species.
 */
export function getTwoFeatureProof(speciesId: CorvidSpeciesId): {
  species: CorvidSpecies;
  feature1: string;
  feature2: string;
  friendScript: string;
} {
  const species = CORVID_SPECIES[speciesId];
  return {
    species,
    feature1: species.definingPair[0],
    feature2: species.definingPair[1],
    friendScript: species.friendScript
  };
}

/**
 * Identify a bird given user-observed physical clues.
 */
export function identifyByObservedClues(selectedClueKeys: string[]): {
  identifiedSpecies: CorvidSpeciesId | null;
  confidence: number;
  explanation: string;
} {
  const keys = new Set(selectedClueKeys);

  // Rook clues
  const rookScore = 
    (keys.has('bare-face') ? 4 : 0) +
    (keys.has('baggy-trousers') ? 3 : 0) +
    (keys.has('large-flock') ? 2 : 0) +
    (keys.has('peaked-head') ? 1 : 0);

  // Jackdaw clues
  const jackdawScore = 
    (keys.has('silver-eye') ? 4 : 0) +
    (keys.has('grey-shawl') ? 4 : 0) +
    (keys.has('pigeon-size') ? 3 : 0) +
    (keys.has('chimney-habitat') ? 2 : 0);

  // Raven clues
  const ravenScore = 
    (keys.has('diamond-tail') ? 4 : 0) +
    (keys.has('throat-hackles') ? 4 : 0) +
    (keys.has('buzzard-size') ? 3 : 0) +
    (keys.has('deep-croak') ? 2 : 0);

  // Crow clues
  const crowScore = 
    (keys.has('feathered-nostrils') ? 4 : 0) +
    (keys.has('slim-legs') ? 3 : 0) +
    (keys.has('square-tail') ? 3 : 0) +
    (keys.has('solitary-pair') ? 2 : 0);

  const scores: [CorvidSpeciesId, number][] = [
    ['rook', rookScore],
    ['jackdaw', jackdawScore],
    ['raven', ravenScore],
    ['crow', crowScore]
  ];

  scores.sort((a, b) => b[1] - a[1]);

  if (scores[0][1] >= 4) {
    const topId = scores[0][0];
    const topSpecies = CORVID_SPECIES[topId];
    return {
      identifiedSpecies: topId,
      confidence: Math.min(100, Math.round((scores[0][1] / 7) * 100)),
      explanation: `Based on your observations, this bird matches the ${topSpecies.commonName} (${topSpecies.scientificName}). ${topSpecies.friendScript}`
    };
  }

  return {
    identifiedSpecies: null,
    confidence: 0,
    explanation: 'Select at least 2 distinct physical traits above to identify your bird with confidence.'
  };
}

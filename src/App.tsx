/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface FeatureComparison {
  id: string;
  name: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  keyDifference: string;
  speciesHints: {
    crow: string;
    rook: string;
    raven: string;
    jackdaw: string;
  };
  species: {
    crow: string;
    rook: string;
    raven: string;
    jackdaw: string;
  };
}

interface SpeciesSummary {
  id: string;
  name: string;
  hint: string;
  summary: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
}

const SPECIES_OVERVIEW: SpeciesSummary[] = [
  {
    id: 'crow',
    name: 'Carrion Crow',
    hint: 'Solitary / pairs',
    summary: 'Usually seen alone or in devoted pairs, with an all-black bill, neat plumage, and steady rowing wingbeats.',
    textColor: 'text-stone-100',
    borderColor: 'border-stone-700/80',
    bgColor: 'bg-stone-800/60'
  },
  {
    id: 'rook',
    name: 'Rook',
    hint: 'Noisy flocks',
    summary: 'Feeds socially in noisy flocks and nests in treetop rookeries; recognized by bare chalky skin at the bill base and baggy thigh feathers.',
    textColor: 'text-amber-300',
    borderColor: 'border-amber-600/30',
    bgColor: 'bg-amber-950/20'
  },
  {
    id: 'raven',
    name: 'Common Raven',
    hint: 'Huge & wild',
    summary: 'A massive, solitary raptor-sized bird with a heavy curved bill, shaggy throat hackles, and a prominent diamond-shaped tail.',
    textColor: 'text-purple-300',
    borderColor: 'border-purple-600/30',
    bgColor: 'bg-purple-950/20'
  },
  {
    id: 'jackdaw',
    name: 'Western Jackdaw',
    hint: 'Pigeon-sized',
    summary: 'Small, agile flock bird with piercing icy silver-white eyes, a dainty stubby bill, and an unmistakable silvery-grey neck shawl.',
    textColor: 'text-emerald-300',
    borderColor: 'border-emerald-600/30',
    bgColor: 'bg-emerald-950/20'
  }
];

const FEATURES: FeatureComparison[] = [
  {
    id: 'beak',
    name: 'Beak & Nostrils',
    x: 21.2,
    y: 38.1,
    keyDifference: 'Adult rooks have bare chalky skin at the bill base; crows have black feathers over the nostrils.',
    speciesHints: {
      crow: 'Feathered nostrils',
      rook: 'Bare chalky skin',
      raven: 'Massive curved bill',
      jackdaw: 'Short stubby bill'
    },
    species: {
      crow: 'Heavy all-black bill. Nostrils are completely covered by bristly black feathers (no bare skin).',
      rook: 'Pointed dagger-like bill with a bare patch of chalky greyish-white skin at the base (looks dipped in flour).',
      raven: 'Enormous, massive curved black bill with a thick bristly tuft covering the top third.',
      jackdaw: 'Short, neat, dainty stubby black bill.'
    }
  },
  {
    id: 'eye',
    name: 'Eye Colour',
    x: 27.8,
    y: 29.5, // Just above the eye
    keyDifference: 'Jackdaws have striking silver-white eyes; all other black corvids have dark eyes.',
    speciesHints: {
      crow: 'Dark brown/black',
      rook: 'Dark brown/black',
      raven: 'Deep brown/black',
      jackdaw: 'Icy silver-white'
    },
    species: {
      crow: 'Dark brown/black eye blending into the feathered head.',
      rook: 'Dark brown/black eye surrounded by pale bare facial skin.',
      raven: 'Deep brown/black eye with an intense, calculating gaze.',
      jackdaw: 'Piercing icy silver-white eye with a black pupil—stands out sharply even from a distance.'
    }
  },
  {
    id: 'head-throat',
    name: 'Head & Throat Feathers',
    x: 27.8,
    y: 51.1, // By the little throat feather spikes
    keyDifference: 'Ravens have spiky throat hackles ("beard"); jackdaws wear a silvery-grey shawl around the neck.',
    speciesHints: {
      crow: 'Smooth rounded head',
      rook: 'Steep peaked crown',
      raven: 'Shaggy throat hackles',
      jackdaw: 'Silvery-grey shawl'
    },
    species: {
      crow: 'Smooth, neatly rounded head profile. Throat feathers lie flat.',
      rook: 'Steep, peaked forehead that slopes up into a tall domed crown.',
      raven: 'Long, spiky throat feathers ("hackles") that puff out like a shaggy beard.',
      jackdaw: 'Distinct silvery-grey shawl around the nape and neck, contrasting with a black skullcap.'
    }
  },
  {
    id: 'plumage',
    name: 'Body Plumage & Sheen',
    x: 48.0,
    y: 58.0, // On the main body and wing
    keyDifference: 'Rooks & ravens show an oily purple-blue sheen; crows are uniform velvet black; jackdaws have two-tone dark & grey plumage.',
    speciesHints: {
      crow: 'Neat velvet black',
      rook: 'Oily purple sheen',
      raven: 'Lustrous blue-purple',
      jackdaw: 'Two-tone slate & grey'
    },
    species: {
      crow: 'Dense, smooth velvet-black body plumage with neat contour feathers. Has a subtle greenish gloss in bright sun, never ragged.',
      rook: 'Silky, loose body feathers with a rich, oily purple-blue metallic sheen. Feathers on the mantle and flank look slightly shaggy.',
      raven: 'Intense, lustrous midnight-blue and violet sheen over heavy jet-black plumage. Deep barrel-chested build with massive muscular body profile.',
      jackdaw: 'Noticeably two-tone! Slate-charcoal back and wings contrasting sharply with a pale smoky-grey belly, breast, and silvery nape.'
    }
  },
  {
    id: 'trousers',
    name: 'Legs & "Trousers" (Thigh Feathers)',
    x: 49.2,
    y: 85.5,
    keyDifference: 'Rooks have shaggy "baggy trousers" drooping over their thighs; crows have neat slim-cut leg feathers.',
    speciesHints: {
      crow: 'Neat slim thighs',
      rook: 'Loose baggy bloomers',
      raven: 'Heavy stout thighs',
      jackdaw: 'Short dainty legs'
    },
    species: {
      crow: 'Tidy, smooth leg feathering. Thighs tuck cleanly against the body like slim-fit trousers.',
      rook: 'Loose, shaggy feathers hanging down over the tops of the legs like baggy plus-fours or bloomers.',
      raven: 'Thick, powerful black legs built for mountain crags.',
      jackdaw: 'Delicate, short black legs. Walks with a quick, jaunty bounce.'
    }
  },
  {
    id: 'tail',
    name: 'Tail Shape',
    x: 77.3,
    y: 86.5, // Directly on the tail feathers
    keyDifference: 'Ravens have a diamond/wedge tail; crows have a flat square paddle; rooks have a rounded fan.',
    speciesHints: {
      crow: 'Square flat paddle',
      rook: 'Rounded fan',
      raven: 'Diamond / wedge',
      jackdaw: 'Short compact square'
    },
    species: {
      crow: 'Square-ended, paddle-like tail cut off straight and flat.',
      rook: 'Gently rounded fan-shaped tail.',
      raven: 'Pointed wedge- or diamond-shaped tail (center feathers are longer than outer ones).',
      jackdaw: 'Short, compact, square-ended tail.'
    }
  },
  {
    id: 'size',
    name: 'Body Size & Wingspan',
    x: 26.25,
    y: 7.8, // On the horizontal scale ruler above the bird
    keyDifference: 'Ravens are giant like buzzards; jackdaws are pigeon-sized; crows and rooks are medium.',
    speciesHints: {
      crow: 'Medium (~100 cm span)',
      rook: 'Medium (~95 cm span)',
      raven: 'Giant (~135 cm span)',
      jackdaw: 'Smallest (~70 cm span)'
    },
    species: {
      crow: 'Medium (45–47 cm length, ~100 cm wingspan). Sturdy and compact build.',
      rook: 'Medium (45–47 cm length, ~95 cm wingspan). Similar length to a crow, but looks leaner and shaggier.',
      raven: 'Giant (60–67 cm length, 120–150 cm wingspan!). Massive raptor size, over double the weight of a crow.',
      jackdaw: 'Smallest (33–35 cm length, ~70 cm wingspan). Compact, plump pigeon-sized bird.'
    }
  },
  {
    id: 'flight',
    name: 'Flight Style & Grouping',
    x: 77.4,
    y: 7.7, // Center of the 5 M-shaped squiggles above the bird
    keyDifference: 'Rooks flock in huge communal groups; crows travel alone or in pairs; ravens soar; jackdaws tumble playfully.',
    speciesHints: {
      crow: 'Methodical rowing / pairs',
      rook: 'Communal flock soaring',
      raven: 'Acrobatic soaring & rolls',
      jackdaw: 'Agile tumbling flaps'
    },
    species: {
      crow: 'Steady, methodical rowing wingbeats ("as the crow flies"). Usually solitary or in a devoted pair.',
      rook: 'Flies in communal streams to and from treetop rookeries. Almost always feeds in large, noisy flocks.',
      raven: 'Majestic raptor-like soaring on flat wings; performs aerial barrel rolls and dives. Solitary pairs guarding vast territories.',
      jackdaw: 'Snappy, agile, acrobatic tumbling flight with fast wingbeats. Flies in tight lifetime pairs inside chatty flocks.'
    }
  }
];

export default function App() {
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);
  const [hoveredFeatureId, setHoveredFeatureId] = useState<string | null>(null);

  const activeFeature = FEATURES.find((f) => f.id === activeFeatureId) || null;

  const isHighlighted = (id: string) => activeFeatureId === id || hoveredFeatureId === id;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveFeatureId(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col items-center justify-between p-4 sm:p-6 select-none font-sans">
      {/* Super simple, minimal title bar - No clear selection button */}
      <header className="w-full max-w-5xl flex items-center py-2 border-b border-stone-800">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Who&apos;s That Corvid
        </h1>
      </header>

      {/* Main stage: Centered corvid with horizontal ruler and flying squiggles above */}
      <main className="w-full max-w-5xl flex-1 flex flex-col items-center justify-center relative py-1 sm:py-2">
        <div className="relative w-full aspect-[4/3] max-h-[64vh] flex items-center justify-center">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full"
            role="img"
            aria-label="Illustration of a crow on a branch with a horizontal scale ruler and birds in flight above"
          >
            <defs>
              <linearGradient id="birdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2c3442" />
                <stop offset="100%" stopColor="#171b24" />
              </linearGradient>
            </defs>

            {/* Horizontal Scale Ruler above the crow (hint for size) */}
            <g
              className="cursor-pointer focus:outline-none"
              onClick={() => setActiveFeatureId('size')}
              onMouseEnter={() => setHoveredFeatureId('size')}
              onMouseLeave={() => setHoveredFeatureId(null)}
            >
              {/* Horizontal ruler stick - highlights on hover */}
              <rect
                x="90"
                y="38"
                width="240"
                height="18"
                rx="4"
                fill={isHighlighted('size') ? '#1e3a5f' : 'url(#birdGrad)'}
                stroke={isHighlighted('size') ? '#38bdf8' : '#475569'}
                strokeWidth={isHighlighted('size') ? '2.5' : '1.5'}
                className="transition-colors duration-150"
              />

              {/* Notched tick marks along bottom edge */}
              {[110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310].map((x, idx) => (
                <line
                  key={x}
                  x1={x}
                  y1={idx % 2 === 0 ? "46" : "49"}
                  x2={x}
                  y2="56"
                  stroke={isHighlighted('size') ? '#93c5fd' : '#64748b'}
                  strokeWidth="1.5"
                  className="transition-colors duration-150"
                />
              ))}
            </g>

            {/* Birds in flight flock above the crow (5 M-shaped squiggles) */}
            <g
              className="cursor-pointer focus:outline-none"
              onClick={() => setActiveFeatureId('flight')}
              onMouseEnter={() => setHoveredFeatureId('flight')}
              onMouseLeave={() => setHoveredFeatureId(null)}
            >
              {[
                { d: "M 545 48 Q 555 35 565 48 Q 575 35 585 48", width: 2.2 },
                { d: "M 595 28 Q 607 13 619 28 Q 631 13 643 28", width: 2.8 },
                { d: "M 655 45 Q 665 32 675 45 Q 685 32 695 45", width: 2.2 },
                { d: "M 580 68 Q 589 57 598 68 Q 607 57 616 68", width: 1.8 },
                { d: "M 630 64 Q 638 54 646 64 Q 654 54 662 64", width: 1.8 }
              ].map((bird, i) => (
                <path
                  key={i}
                  d={bird.d}
                  stroke={isHighlighted('flight') ? '#38bdf8' : '#718096'}
                  strokeWidth={isHighlighted('flight') ? bird.width * 1.3 : bird.width}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="transition-colors duration-150"
                />
              ))}
            </g>

            {/* Main Perched Corvid - Perfectly centered in the 800px viewBox */}
            <g transform="translate(-90, -12) scale(1.18)">
              {/* Perching branch */}
              <path
                d="M 90 525 Q 300 485 450 475 Q 600 465 740 455 Q 720 480 570 495 Q 380 510 90 545 Z"
                fill="#2e261f"
                stroke="#4a3f35"
                strokeWidth="2"
              />

              {/* Perched Crow - Tail */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveFeatureId('tail')}
                onMouseEnter={() => setHoveredFeatureId('tail')}
                onMouseLeave={() => setHoveredFeatureId(null)}
              >
                <path
                  d="M 520 375 L 685 480 Q 700 495 685 510 Q 660 520 635 498 L 480 395 Z"
                  fill={isHighlighted('tail') ? '#1e3a5f' : 'url(#birdGrad)'}
                  stroke={isHighlighted('tail') ? '#38bdf8' : '#475569'}
                  strokeWidth={isHighlighted('tail') ? '3' : '2'}
                  className="transition-colors duration-150"
                />
                {/* Tail feather vanes */}
                <path
                  d="M 540 390 L 668 476"
                  stroke={isHighlighted('tail') ? '#38bdf8' : '#475569'}
                  strokeWidth="1.5"
                  className="transition-colors duration-150"
                />
                <path
                  d="M 515 395 L 642 490"
                  stroke={isHighlighted('tail') ? '#38bdf8' : '#475569'}
                  strokeWidth="1.5"
                  className="transition-colors duration-150"
                />
              </g>

              {/* Perched Crow - Main Body & Wing Plumage */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveFeatureId('plumage')}
                onMouseEnter={() => setHoveredFeatureId('plumage')}
                onMouseLeave={() => setHoveredFeatureId(null)}
              >
                {/* Perched Crow - Body */}
                <path
                  d="M 280 280 C 270 320 285 370 325 410 C 365 440 435 440 480 395 C 440 350 370 310 320 280 Z"
                  fill={isHighlighted('plumage') ? '#1e3a5f' : 'url(#birdGrad)'}
                  stroke={isHighlighted('plumage') ? '#38bdf8' : '#475569'}
                  strokeWidth={isHighlighted('plumage') ? '3' : '2'}
                  className="transition-colors duration-150"
                />

                {/* Perched Crow - Wing */}
                <path
                  d="M 340 220 C 440 230 540 290 580 390 C 590 415 575 428 545 425 C 475 420 380 370 330 330 C 315 285 320 250 340 220 Z"
                  fill={isHighlighted('plumage') ? '#1e3a5f' : 'url(#birdGrad)'}
                  stroke={isHighlighted('plumage') ? '#38bdf8' : '#475569'}
                  strokeWidth={isHighlighted('plumage') ? '3' : '2'}
                  className="transition-colors duration-150"
                />
                <path
                  d="M 370 250 Q 450 280 545 370"
                  stroke={isHighlighted('plumage') ? '#38bdf8' : '#3d4656'}
                  strokeWidth="2"
                  fill="none"
                  className="transition-colors duration-150"
                />
                <path
                  d="M 390 280 Q 460 320 535 400"
                  stroke={isHighlighted('plumage') ? '#38bdf8' : '#3d4656'}
                  strokeWidth="2"
                  fill="none"
                  className="transition-colors duration-150"
                />
              </g>

              {/* Perched Crow - Thigh / Trousers & Straight Feet */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveFeatureId('trousers')}
                onMouseEnter={() => setHoveredFeatureId('trousers')}
                onMouseLeave={() => setHoveredFeatureId(null)}
              >
                <path
                  d="M 360 410 C 370 450 380 470 410 472 C 430 472 445 450 455 425 C 440 405 400 395 360 410 Z"
                  fill={isHighlighted('trousers') ? '#1e3a5f' : 'url(#birdGrad)'}
                  stroke={isHighlighted('trousers') ? '#38bdf8' : '#475569'}
                  strokeWidth={isHighlighted('trousers') ? '3' : '2'}
                  className="transition-colors duration-150"
                />
                {/* Baggy trousers feather tufts */}
                <path
                  d="M 385 455 Q 395 476 405 470"
                  stroke={isHighlighted('trousers') ? '#38bdf8' : '#64748b'}
                  strokeWidth="2"
                  fill="none"
                  className="transition-colors duration-150"
                />
                <path
                  d="M 405 460 Q 418 478 425 465"
                  stroke={isHighlighted('trousers') ? '#38bdf8' : '#64748b'}
                  strokeWidth="2"
                  fill="none"
                  className="transition-colors duration-150"
                />
                <path
                  d="M 420 450 Q 432 468 440 455"
                  stroke={isHighlighted('trousers') ? '#38bdf8' : '#64748b'}
                  strokeWidth="2"
                  fill="none"
                  className="transition-colors duration-150"
                />

                {/* Straight legs and straight feet */}
                {/* Near leg (straight down vertically) */}
                <line
                  x1="398"
                  y1="462"
                  x2="398"
                  y2="480"
                  stroke={isHighlighted('trousers') ? '#38bdf8' : '#475569'}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="transition-colors duration-150"
                />
                {/* Near foot (straight horizontal along the branch) */}
                <line
                  x1="378"
                  y1="480"
                  x2="410"
                  y2="480"
                  stroke={isHighlighted('trousers') ? '#38bdf8' : '#1e293b'}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="transition-colors duration-150"
                />

                {/* Far leg (straight down vertically) */}
                <line
                  x1="422"
                  y1="458"
                  x2="422"
                  y2="478"
                  stroke={isHighlighted('trousers') ? '#38bdf8' : '#3d4756'}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="transition-colors duration-150"
                />
                {/* Far foot (straight horizontal along the branch) */}
                <line
                  x1="404"
                  y1="478"
                  x2="434"
                  y2="478"
                  stroke={isHighlighted('trousers') ? '#38bdf8' : '#0f172a'}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="transition-colors duration-150"
                />
              </g>

              {/* Head & Throat with feather spikes */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveFeatureId('head-throat')}
                onMouseEnter={() => setHoveredFeatureId('head-throat')}
                onMouseLeave={() => setHoveredFeatureId(null)}
              >
                <path
                  d="M 230 200 C 240 160 270 140 310 145 C 345 150 365 175 365 215 C 365 245 340 280 305 285 C 265 290 235 260 230 200 Z"
                  fill={isHighlighted('head-throat') ? '#1e3a5f' : 'url(#birdGrad)'}
                  stroke={isHighlighted('head-throat') ? '#38bdf8' : '#475569'}
                  strokeWidth={isHighlighted('head-throat') ? '3' : '2'}
                  className="transition-colors duration-150"
                />
                {/* Throat feather spikes */}
                <path
                  d="M 260 250 L 255 270 L 272 265"
                  stroke={isHighlighted('head-throat') ? '#38bdf8' : '#94a3b8'}
                  strokeWidth={isHighlighted('head-throat') ? '2.5' : '2'}
                  fill="none"
                  className="transition-colors duration-150"
                />
                <path
                  d="M 275 260 L 275 280 L 288 272"
                  stroke={isHighlighted('head-throat') ? '#38bdf8' : '#94a3b8'}
                  strokeWidth={isHighlighted('head-throat') ? '2.5' : '2'}
                  fill="none"
                  className="transition-colors duration-150"
                />
              </g>

              {/* Beak - Clean outline without dotted circle */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveFeatureId('beak')}
                onMouseEnter={() => setHoveredFeatureId('beak')}
                onMouseLeave={() => setHoveredFeatureId(null)}
              >
                <path
                  d="M 130 205 C 170 195 205 195 240 200 L 235 220 L 130 205 Z"
                  fill={isHighlighted('beak') ? '#1e3a5f' : '#2d3340'}
                  stroke={isHighlighted('beak') ? '#38bdf8' : '#64748b'}
                  strokeWidth={isHighlighted('beak') ? '3' : '2'}
                  className="transition-colors duration-150"
                />
                <path
                  d="M 130 205 L 235 220 C 215 230 185 225 130 205 Z"
                  fill={isHighlighted('beak') ? '#1e3a5f' : '#1c222c'}
                  stroke={isHighlighted('beak') ? '#38bdf8' : '#526075'}
                  strokeWidth={isHighlighted('beak') ? '2.5' : '1.5'}
                  className="transition-colors duration-150"
                />
              </g>

              {/* Eye */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveFeatureId('eye')}
                onMouseEnter={() => setHoveredFeatureId('eye')}
                onMouseLeave={() => setHoveredFeatureId(null)}
              >
                <circle
                  cx="265"
                  cy="185"
                  r="12"
                  fill={isHighlighted('eye') ? '#38bdf8' : '#1a2230'}
                  stroke={isHighlighted('eye') ? '#38bdf8' : '#94a3b8'}
                  strokeWidth={isHighlighted('eye') ? '3' : '2'}
                  className="transition-colors duration-150"
                />
                <circle cx="265" cy="185" r="7" fill={isHighlighted('eye') ? '#0284c7' : '#64748b'} />
                <circle cx="265" cy="185" r="4" fill="#030712" />
                <circle cx="263" cy="183" r="1.5" fill="#ffffff" />
              </g>
            </g>

            {/* Hotspots for each feature - Highlights on hover without ping animation */}
            {FEATURES.map((feature) => {
              const highlighted = isHighlighted(feature.id);
              const px = (feature.x / 100) * 800;
              const py = (feature.y / 100) * 600;

              return (
                <g
                  key={feature.id}
                  className="cursor-pointer focus:outline-none"
                  onClick={() => setActiveFeatureId(feature.id)}
                  onMouseEnter={() => setHoveredFeatureId(feature.id)}
                  onMouseLeave={() => setHoveredFeatureId(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${feature.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveFeatureId(feature.id);
                    }
                  }}
                >
                  {/* Transparent hit area for easy tapping */}
                  <circle cx={px} cy={py} r="28" fill="transparent" />

                  {/* Clean Marker Dot - No ping animation */}
                  <circle
                    cx={px}
                    cy={py}
                    r={highlighted ? 12 : 9}
                    fill={highlighted ? '#38bdf8' : '#f59e0b'}
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    className="transition-all duration-150"
                  />
                </g>
              );
            })}
          </svg>

          {/* Info Box - No entrance animation; tapping outside immediately dismisses it */}
          {activeFeature && (
            <div className="fixed inset-0 z-30 flex items-center justify-center p-4 pointer-events-none">
              {/* Full-screen backdrop overlay for outside click dismissal */}
              <div
                className="fixed inset-0 bg-black/40 pointer-events-auto"
                onClick={() => setActiveFeatureId(null)}
                data-testid="modal-backdrop"
                aria-hidden="true"
              />

              {/* Modal dialog card */}
              <div
                className="relative z-10 w-full max-w-[480px] max-h-[90vh] overflow-y-auto bg-stone-900 border border-stone-700 rounded-xl shadow-2xl p-4 sm:p-5 text-stone-100 pointer-events-auto"
                role="dialog"
                aria-labelledby="active-feature-heading"
              >
                {/* Header of info box */}
                <div className="flex items-start justify-between gap-3 pb-2.5 mb-3 border-b border-stone-800">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-sky-400">
                      Feature Comparison
                    </span>
                    <h2
                      id="active-feature-heading"
                      className="text-lg font-bold text-white leading-tight"
                    >
                      {activeFeature.name}
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveFeatureId(null)}
                    className="p-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick difference summary */}
                <div className="text-xs bg-sky-950/40 border border-sky-800/50 text-sky-200 p-2.5 rounded-lg mb-3 font-medium leading-relaxed">
                  {activeFeature.keyDifference}
                </div>

                {/* 4 Species Breakdown with feature-specific disambiguation hints */}
                <div className="space-y-2 text-xs">
                  {/* Crow */}
                  <div className="p-2.5 rounded-lg bg-stone-800/70 border border-stone-700">
                    <div className="font-bold text-white mb-0.5 flex items-center justify-between">
                      <span>Carrion Crow</span>
                      <span className="text-[10px] text-sky-300 bg-sky-950/60 border border-sky-800/60 px-1.5 py-0.5 rounded font-medium">
                        {activeFeature.speciesHints.crow}
                      </span>
                    </div>
                    <p className="text-stone-300 leading-relaxed">
                      {activeFeature.species.crow}
                    </p>
                  </div>

                  {/* Rook */}
                  <div className="p-2.5 rounded-lg bg-stone-800/70 border border-amber-500/30">
                    <div className="font-bold text-amber-300 mb-0.5 flex items-center justify-between">
                      <span>Rook</span>
                      <span className="text-[10px] text-amber-300 bg-amber-950/60 border border-amber-800/60 px-1.5 py-0.5 rounded font-medium">
                        {activeFeature.speciesHints.rook}
                      </span>
                    </div>
                    <p className="text-stone-300 leading-relaxed">
                      {activeFeature.species.rook}
                    </p>
                  </div>

                  {/* Raven */}
                  <div className="p-2.5 rounded-lg bg-stone-800/70 border border-purple-500/30">
                    <div className="font-bold text-purple-300 mb-0.5 flex items-center justify-between">
                      <span>Common Raven</span>
                      <span className="text-[10px] text-purple-300 bg-purple-950/60 border border-purple-800/60 px-1.5 py-0.5 rounded font-medium">
                        {activeFeature.speciesHints.raven}
                      </span>
                    </div>
                    <p className="text-stone-300 leading-relaxed">
                      {activeFeature.species.raven}
                    </p>
                  </div>

                  {/* Jackdaw */}
                  <div className="p-2.5 rounded-lg bg-stone-800/70 border border-emerald-500/30">
                    <div className="font-bold text-emerald-300 mb-0.5 flex items-center justify-between">
                      <span>Western Jackdaw</span>
                      <span className="text-[10px] text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded font-medium">
                        {activeFeature.speciesHints.jackdaw}
                      </span>
                    </div>
                    <p className="text-stone-300 leading-relaxed">
                      {activeFeature.species.jackdaw}
                    </p>
                  </div>
                </div>

                {/* Close footer */}
                <div className="mt-3 pt-2.5 border-t border-stone-800 flex justify-end">
                  <button
                    onClick={() => setActiveFeatureId(null)}
                    className="px-3 py-1 rounded bg-stone-800 hover:bg-stone-700 text-xs text-sky-400 font-medium transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* At-a-glance species overview: 2x2 grid with respective species, original hint text, and quick sentence */}
      <footer className="w-full max-w-5xl mt-2 pt-2 sm:pt-3 border-t border-stone-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {SPECIES_OVERVIEW.map((s) => (
            <div
              key={s.id}
              className={`p-2.5 sm:p-3 rounded-lg border ${s.borderColor} ${s.bgColor} transition-colors`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className={`font-bold text-xs sm:text-sm ${s.textColor}`}>
                  {s.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-stone-900/80 border border-stone-700 text-stone-300 shadow-sm">
                  {s.hint}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-300/90 leading-relaxed">
                {s.summary}
              </p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

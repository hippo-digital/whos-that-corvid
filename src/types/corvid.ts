/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CorvidSpeciesId = 'rook' | 'crow' | 'raven' | 'jackdaw';

export type AnatomicalPartId = 
  | 'beak'
  | 'eye'
  | 'head-throat'
  | 'trousers'
  | 'tail'
  | 'size'
  | 'wings'
  | 'plumage';

export interface SpeciesFeatureInfo {
  appearance: string;
  keyClue: string;
  distinguishingQuote: string;
  bewareTraps?: string;
}

export interface AnatomicalFeature {
  id: AnatomicalPartId;
  name: string;
  shortLabel: string;
  hotspotCoordinates: {
    x: number;
    y: number;
    labelPosition: 'top' | 'bottom' | 'left' | 'right';
  };
  summaryRule: string;
  description: string;
  speciesComparisons: Record<CorvidSpeciesId, SpeciesFeatureInfo>;
}

export interface CorvidSpecies {
  id: CorvidSpeciesId;
  commonName: string;
  scientificName: string;
  tagline: string;
  sizeDescription: string;
  habitat: string;
  voice: string;
  socialClue: string;
  definingPair: [string, string]; // Top 2 physical features to explain to friends
  friendScript: string; // The exact conversational sentence to explain to someone
  colorAccent: string;
}

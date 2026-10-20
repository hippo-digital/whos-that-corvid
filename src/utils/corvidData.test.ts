/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { CORVID_SPECIES, ANATOMICAL_FEATURES, getTwoFeatureProof, identifyByObservedClues } from './corvidData.ts';

test('Corvid species database contains all four primary species', () => {
  const speciesKeys = Object.keys(CORVID_SPECIES);
  assert.ok(speciesKeys.includes('rook'), 'Must include rook');
  assert.ok(speciesKeys.includes('crow'), 'Must include crow');
  assert.ok(speciesKeys.includes('raven'), 'Must include raven');
  assert.ok(speciesKeys.includes('jackdaw'), 'Must include jackdaw');
  assert.equal(speciesKeys.length, 4);
});

test('Each species has a valid defining pair and conversational explanation script', () => {
  for (const [id, species] of Object.entries(CORVID_SPECIES)) {
    assert.equal(species.definingPair.length, 2, `${id} must have exactly two defining features`);
    assert.ok(species.definingPair[0].length > 10, `${id} feature 1 is descriptive`);
    assert.ok(species.definingPair[1].length > 10, `${id} feature 2 is descriptive`);
    assert.ok(species.friendScript.length > 20, `${id} has conversational script for friends`);
  }
});

test('Anatomical features covers all essential parts from brief', () => {
  const featureIds = ANATOMICAL_FEATURES.map(f => f.id);
  assert.ok(featureIds.includes('beak'), 'Must include beak');
  assert.ok(featureIds.includes('trousers'), 'Must include legs/trousers');
  assert.ok(featureIds.includes('eye'), 'Must include eye');
  assert.ok(featureIds.includes('head-throat'), 'Must include head and throat');
  assert.ok(featureIds.includes('tail'), 'Must include tail');

  for (const feature of ANATOMICAL_FEATURES) {
    for (const speciesId of ['rook', 'crow', 'raven', 'jackdaw'] as const) {
      assert.ok(feature.speciesComparisons[speciesId], `Feature ${feature.id} must compare ${speciesId}`);
      assert.ok(feature.speciesComparisons[speciesId].keyClue.length > 5);
      assert.ok(feature.speciesComparisons[speciesId].appearance.length > 10);
    }
  }
});

test('getTwoFeatureProof returns exact pair for Rook', () => {
  const proof = getTwoFeatureProof('rook');
  assert.equal(proof.species.commonName, 'Rook');
  assert.match(proof.feature1, /bare/i);
  assert.match(proof.feature2, /trousers/i);
});

test('identifyByObservedClues correctly identifies a Rook by bare face and trousers', () => {
  const result = identifyByObservedClues(['bare-face', 'baggy-trousers']);
  assert.equal(result.identifiedSpecies, 'rook');
  assert.ok(result.confidence >= 80);
  assert.match(result.explanation, /Rook/);
});

test('identifyByObservedClues correctly identifies a Jackdaw by silver eye and grey shawl', () => {
  const result = identifyByObservedClues(['silver-eye', 'grey-shawl']);
  assert.equal(result.identifiedSpecies, 'jackdaw');
  assert.ok(result.confidence >= 80);
  assert.match(result.explanation, /Jackdaw/);
});

test('identifyByObservedClues returns null when no matching traits selected', () => {
  const result = identifyByObservedClues([]);
  assert.equal(result.identifiedSpecies, null);
  assert.equal(result.confidence, 0);
});

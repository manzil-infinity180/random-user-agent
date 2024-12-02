import { generateUserAgents, getUserAgent } from './generateUserAgents.js';
import { test, expect } from 'vitest';

test('generate user agents', () => {
  expect(generateUserAgents(100)).length(100);
});

test('generate user agents contains value', () => {
  const randomUserAgent = generateUserAgents(5);
  expect(randomUserAgent).length(5);
  expect(randomUserAgent[0]).includes('Mozilla/5.0');
  expect(randomUserAgent[0]).includes('AppleWebKit/');
  expect(randomUserAgent[0]).includes('(KHTML, like Gecko)');
  expect(randomUserAgent[0]).includes('Chrome/');
  expect(randomUserAgent[0]).includes('Safari/');
  expect(Array.isArray(randomUserAgent)).toBe(true);
});

test('check for getUserAgent', () => {
  const generateOneUserAgent = getUserAgent();
  const generateUserAgentWithOptionalCount = getUserAgent(100);
  expect(generateOneUserAgent).not.toBeUndefined();
  expect(generateUserAgentWithOptionalCount).not.toBeUndefined();
  expect(typeof generateOneUserAgent).toBe('string');
  expect(typeof generateUserAgentWithOptionalCount).toBe('string');
});

import { generateUserAgents } from './generateUserAgents.js';
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
});

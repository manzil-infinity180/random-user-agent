import {
  generateUserAgents,
  getUserAgent,
  generateAndroidAgents,
  generateEdgeAgents,
  generateFirefoxAgents,
  generateUserAgentOnType,
  getAndroidAgent,
  getEdgeAgent,
  getFirefoxAgent,
  generateUserAgentRandom,
} from './generateUserAgents.js';
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

test('check for different user agents types', () => {
  const androidUserAgents = generateAndroidAgents(10);
  const firefoxUserAgents = generateFirefoxAgents(10);
  const edgeUserAgents = generateEdgeAgents(10);

  expect(androidUserAgents).length(10);
  expect(firefoxUserAgents).length(10);
  expect(edgeUserAgents).length(10);

  expect(androidUserAgents[0]).includes('Mozilla/5.0');
  expect(firefoxUserAgents[0]).includes('Mozilla/5.0');
  expect(edgeUserAgents[0]).includes('Mozilla/5.0');

  expect(androidUserAgents[0]).includes('Chrome/');
  expect(firefoxUserAgents[0]).includes('Firefox/');
  expect(edgeUserAgents[0]).includes('Edg/');

  expect(androidUserAgents[0]).includes('Mobile Safari/537.36');
  expect(androidUserAgents[0]).includes('Android');
});

test('check for user agent types from one function', () => {
  const userAgents = {
    generateUserAgentOnType_firefox: generateUserAgentOnType({
      options: {
        type: 'firefox',
      },
    }),
    generateUserAgentOnType_chrome: generateUserAgentOnType({
      options: {
        type: 'chrome',
      },
    }),
    generateUserAgentOnType_android: generateUserAgentOnType({
      options: {
        type: 'android',
      },
    }),
    generateUserAgentOnType_edge: generateUserAgentOnType({
      options: {
        type: 'edge',
      },
    }),
    getAndroidAgent: getAndroidAgent(),
    getEdgeAgent: getEdgeAgent(),
    getFirefoxAgent: getFirefoxAgent(),
    generateUserAgentRandom: generateUserAgentRandom(),
  };
  expect(userAgents.generateUserAgentOnType_firefox).include('Firefox/');
  expect(userAgents.generateUserAgentOnType_chrome).include('Chrome/');
  expect(userAgents.generateUserAgentOnType_edge).include('Edg/');
  expect(userAgents.generateUserAgentOnType_android).include('Chrome/');
  expect(userAgents.generateUserAgentOnType_android).include('Android');

  expect(userAgents.getFirefoxAgent).include('Firefox/');
  expect(userAgents.getEdgeAgent).include('Edg/');
  expect(userAgents.getAndroidAgent).include('Chrome/');
  expect(userAgents.getAndroidAgent).include('Android');

  expect(userAgents.getFirefoxAgent).not.toBeUndefined();
  expect(userAgents.getEdgeAgent).not.toBeUndefined();
  expect(userAgents.getAndroidAgent).not.toBeUndefined();
  expect(userAgents.getAndroidAgent).not.toBeUndefined();

  expect(typeof userAgents.getFirefoxAgent).toBe('string');
  expect(typeof userAgents.getEdgeAgent).toBe('string');
  expect(typeof userAgents.getAndroidAgent).toBe('string');
  expect(typeof userAgents.getAndroidAgent).toBe('string');

  expect(typeof userAgents.generateUserAgentOnType_firefox).toBe('string');
  expect(typeof userAgents.generateUserAgentOnType_chrome).toBe('string');
  expect(typeof userAgents.generateUserAgentOnType_edge).toBe('string');
  expect(typeof userAgents.generateUserAgentOnType_android).toBe('string');
  expect(typeof userAgents.generateUserAgentOnType_android).toBe('string');
});

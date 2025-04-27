/** @type {string} */
export const STATIC_ASSETS_BASE = '/';

/**
 * @param {string} path
 * @returns {string}
 */
export function staticAsset(path) {
  return `${STATIC_ASSETS_BASE}${path}`;
} 
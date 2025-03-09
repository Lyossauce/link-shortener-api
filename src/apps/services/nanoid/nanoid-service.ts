import { nanoid } from 'nanoid'

const CODE_SIZE = 8

/**
 * Generates a unique Nano ID string.
 *
 * @returns {string} A unique Nano ID string of length specified by CODE_SIZE.
 */
export const generateNanoId = (): string => {
    return nanoid(CODE_SIZE)
}
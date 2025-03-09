import { createClient } from 'redis';

// USE A BETTER WAY TO HANDLE REDIS CLIENT
// USER ENVIRONMENT VARIABLES FOR REDIS CONNECTION DETAILS

/**
 * Sets a key-value pair in Redis.
 *
 * @param key - The key to set in Redis.
 * @param value - The value to associate with the key.
 * @returns A promise that resolves when the key-value pair has been set.
 *
 * @throws Will throw an error if the Redis client cannot connect or if the key-value pair cannot be set.
 */
export const setRedisKey = async (key: string, value: string): Promise<void> => {
    const client = await createClient({
        url: 'redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@localhost:6379'
    }).connect();
    await client.set(key, value);
    await client.disconnect();
}
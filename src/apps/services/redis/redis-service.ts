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

/**
 * Retrieves the value associated with the given key from a Redis database.
 *
 * @param key - The key whose associated value is to be returned.
 * @returns A promise that resolves to the value associated with the specified key, or null if the key does not exist.
 * @throws Will throw an error if the Redis client fails to connect or retrieve the value.
 */
export const getRedisKey = async (key: string): Promise<string | null> => {
    const client = await createClient({
        url: 'redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@localhost:6379'
    }).connect();
    const value = await client.get(key);
    await client.disconnect();
    return value;
}
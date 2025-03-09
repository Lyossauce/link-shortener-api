import { APIGatewayProxyEvent } from 'aws-lambda';
import { getRedisKey } from '../../services/redis/redis-service';

/**
 * Handles the redirection of shortened links.
 * 
 * This controller retrieves the original URL from a Redis store using the path from the request.
 * If the URL is found, it responds with a 301 status code and the Location header set to the original URL.
 * If the URL is not found, it responds with a 404 status code and an error message.
 * 
 * @param {APIGatewayProxyEvent} request - The API Gateway event containing the request details.
 * @returns {Promise<{statusCode: number, body?: string, headers?: {Location: string}}>} The response object with the appropriate status code and headers.
 */
export const redirectLinkController = async (request: APIGatewayProxyEvent) => {
    // ADD VALIDATOR
    const url = await getRedisKey(request.path.replace('/', ''));

    if (!url) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'URL not found' })
        }
    }

    return {
        statusCode: 301,
        headers: {
            Location: url
        }
    }
}

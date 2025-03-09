import { APIGatewayProxyEvent } from 'aws-lambda';
import { setRedisKey } from '../../services/redis/redis-service';
import { generateNanoId } from '../../services/nanoid/nanoid-service';

// ADD ERROR HANDLING
// ADD HOSTNAME HANDLING AS ENVIRONMENT VARIABLE


/**
 * Handles the creation of a new shortened link.
 * 
 * @param {APIGatewayProxyEvent} request - The incoming request object from API Gateway.
 * @returns {Promise<{ statusCode: number, body: string }>} - The response object containing the status code and the body with the shortened URL.
 * 
 * @async
 */
export const postLinksController = async (request: APIGatewayProxyEvent) => {
    // ADD VALIDATOR
    const url = JSON.parse(request.body as string).url
    
    const id = generateNanoId();
    
    await setRedisKey(id, url);

    return {
        statusCode: 201,
        body: JSON.stringify({ url: `http:localhost:3000/local/${id}` })
    }
}
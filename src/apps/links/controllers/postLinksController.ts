import { APIGatewayProxyEvent } from 'aws-lambda';
import { setRedisKey } from '../../services/redis/redis-service';
import { generateNanoId } from '../../services/nanoid/nanoid-service';

export const postLinksController = async (request: APIGatewayProxyEvent) => {
    console.log('postLinksController', JSON.parse(request.body as string).url);
    // ADD VALIDATOR
    // ADD NANOID SERVICE
    //const id = generateNanoId();
    // ADD REDIS SERVICE
    await setRedisKey('id', JSON.parse(request.body as string).url);
}
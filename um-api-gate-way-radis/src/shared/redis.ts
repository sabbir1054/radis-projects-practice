import { createClient } from 'redis';
import config from '../config';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (err) => console.log('Redis error ', err));
redisClient.on('connect', (err) => console.log('Redis connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};

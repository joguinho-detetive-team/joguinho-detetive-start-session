import IORedis from "ioredis";

export class Redis {
  public redis: IORedis.Redis;

  private constructor(keyPrefix: string) {
    this.redis = new IORedis({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
      keyPrefix: keyPrefix,
    });
  }

  public static getInstance(keyPrefix: string): IORedis.Redis {
    return new Redis(keyPrefix).redis;
  }
}

import IORedis from "ioredis";

import { Redis } from "./Redis";

export class BaseCacheRepository {
  private redis: IORedis.Redis;

  constructor(keyPrefix: string) {
    this.redis = Redis.getInstance(keyPrefix);
  }

  public async set(key: string, value: string, time: number): Promise<string> {
    return this.redis.set(key, value, "EX", time);
  }

  public async get(key: string): Promise<any> {
    const value = await this.redis.get(key);
    return value ? value : null;
  }

  public async del(key: string): Promise<number> {
    return this.redis.del(key);
  }

  public async delPrefix(prefix): Promise<number> {
    const keys = (await this.redis.keys(`cache:${prefix}:*`)).map((key) =>
      key.replace("cache", "")
    );

    return this.redis.del(keys);
  }
}

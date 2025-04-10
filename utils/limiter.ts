import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis"; // see below for cloudflare and fastly adapters
import { RateLimiterMemory } from 'rate-limiter-flexible'

// Create a new ratelimiter, that allows 10 requests per 10 seconds
// export const rateLimiter = new Ratelimit({
//     redis: Redis.fromEnv(),
//     limiter: Ratelimit.slidingWindow(4, "15 m"),
//     analytics: true,
//     /**
//      * Optional prefix for the keys used in redis. This is useful if you want to share a redis
//      * instance with other applications and want to avoid key collisions. The default prefix is
//      * "@upstash/ratelimit"
//      */
//     prefix: "@upstash/ratelimit",
// });

/* export async function ratelimitValidate(ip: string) {
    try {
        await rateLimiter.consume(ip)
        return true
    } catch {
        throw new Error('Too many requests, please try again later.')
    }
} */


/* export async function ratelimitValidate(ip: string) {
    const { success } = await ratelimit.limit(ip)
    if(!success){
        throw new Error("Rate Limited")
        return false
    }else{
        return true
    }
}  */

const rateLimiter = new RateLimiterMemory({
    points: 3,      // 3 requests
    duration: 60,   // per 60 seconds
})

export async function ratelimitValidate(ip: string) {
    try {
        await rateLimiter.consume(ip)
        return true
    } catch {
        throw new Error('Too many requests, please try again later.')
    }
}
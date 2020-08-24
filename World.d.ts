export interface World {
  /**
   * Destroy the World!
   *
   * @link [World:destroy](https://lovr.org/docs/World:destroy)
   */
  destroy(): void;

  /**
   * Casts a ray through the World, calling a function every time the ray intersects with a Shape.
   *
   * @param x1 The x coordinate of the starting position of the ray.
   * @param y1 The y coordinate of the starting position of the ray.
   * @param z1 The z coordinate of the starting position of the ray.
   * @param x2 The x coordinate of the ending position of the ray.
   * @param y2 The y coordinate of the ending position of the ray.
   * @param z2 The z coordinate of the ending position of the ray.
   * @param callback The function to call when an intersection is detected.
   * @link [World:raycast](https://lovr.org/docs/World:raycast)
   */
  raycast(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, callback: (this: void, shape, x, y, z, nx, ny, nz) => any): void;

  /**
   * Updates the World, advancing the physics simulation forward in time and resolving collisions between colliders in the World.
   *
   * @param dt The amount of time to advance the simulation forward.
   * @param resolver The collision resolver function to use. This will be called before updating to allow for custom collision processing. If absent, a default will be used.
   * @link [World:update](https://lovr.org/docs/World:update)
   */
  update(dt: number, resolver?: (this: void, world: World) => void): void;
}

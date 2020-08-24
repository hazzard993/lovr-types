import { Shape } from "./Shape";

/**
 * Colliders are objects that represent a single rigid body in a physics simulation.
 *
 * @link [Collider](https://lovr.org/docs/Collider)
 */
export interface Collider {
  /**
   * Returns the bounding box for the Collider, computed from attached shapes.
   *
   * @link [Collider:getAABB](https://lovr.org/docs/Collider:getAABB)
   */
  getAABB(): [number, number, number, number, number, number];

  /**
   * Attaches a Shape to the collider.
   *
   * @param shape The Shape to attach.
   * @link [Collider:addShape](https://lovr.org/docs/Collider:addShape)
   */
  addShape(shape: Shape): void;

  /**
   * Returns the Collider's tag.
   *
   * @link [Collider:getTag](https://lovr.org/docs/Collider:getTag)
   */
  getTag(): string;

  /**
   * Sets the Collider's tag.
   *
   * @param tag The Collider's collision tag.
   * @link [Collider:setTag](https://lovr.org/docs/Collider:setTag)
   */
  setTag(tag: string): void;

  /**
   * Applies a force to the Collider.
   *
   * @param x The x component of the force to apply.
   * @param y The y component of the force to apply.
   * @param z The z component of the force to apply.
   * @link [Collider:applyForce](https://lovr.org/docs/Collider:applyForce)
   */
  applyForce(x: number, y: number, z: number): void;

  /**
   * Applies a force to the Collider.
   *
   * @param x The x component of the force to apply.
   * @param y The y component of the force to apply.
   * @param z The z component of the force to apply.
   * @param px The x position to apply the force at, in world coordinates.
   * @param py The y position to apply the force at, in world coordinates.
   * @param pz The z position to apply the force at, in world coordinates.
   * @link [Collider:applyForce](https://lovr.org/docs/Collider:applyForce)
   */
  applyForce(x: number, y: number, z: number, px: number, py: number, pz: number): void;

  /**
   * Applies torque to the Collider.
   *
   * @param x The x component of the torque.
   * @param y The y component of the torque.
   * @param z The z component of the torque.
   * @link [Collider:applyTorque](https://lovr.org/docs/Collider:applyTorque)
   */
  applyTorque(x: number, y: number, z: number): void;

  getMass;
  setMass;
  getMassData;
  setMassData;
  destroy;
  getRestitution;
  setRestitution;
  getShapes;
  getLinearDamping;
  setLinearDamping;
  getLinearVelocityFromLocalPoint;
  getLinearVelocityFromWorldPoint;
  isKinematic;
  setKinematic;
  isSleepingAllowed;
  setSleepingAllowed;
  getAngularDamping;
  setAngularDamping;
  getAngularVelocity;
  setAngularVelocity;
  getLocalCenter;
  getLocalPoint;
  getLocalVector;
  getJoints;
  getWorld;
  getWorldPoint;
  getWorldVector;
  getPosition;
  setPosition;
  isGravityIgnored;
  setGravityIgnored;
  removeShape;
  getFriction;
  setFriction;
  getOrientation;
  setOrientation;
  getUserData;
  setUserData;
  isAwake;
  setAwake;
}

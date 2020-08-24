import { World } from "./World";
import { BoxShape } from "./BoxShape";
import { CapsuleShape } from "./CapsuleShape";
import { CylinderShape } from "./CylinderShape";
import { SphereShape } from "./SphereShape";
import { BallJoint } from "./BallJoint";
import { Collider } from "./Collider";
import { HingeJoint } from "./HingeJoint";
import { DistanceJoint } from "./DistanceJoint";
import { SliderJoint } from "./SliderJoint";

/**
 * Creates a new physics World, which tracks the overall physics simulation, holds collider objects, and resolves collisions between them.
 *
 * @param xg The x component of the gravity force.
 * @param yg The y component of the gravity force.
 * @param zg The z component of the gravity force.
 * @param allowSleep Whether or not colliders will automatically be put to sleep.
 * @param tags A list of collision tags colliders can be assigned to.
 * @link [lovr.physics.newWorld](https://lovr.org/docs/lovr.physics.newWorld)
 */
export function newWorld(xg?: number, yg?: number, zg?: number, allowSleep?: boolean, tags?: any[]): World;

/**
 * Creates a new BoxShape.
 *
 * @param width The width of the box, in meters.
 * @param height The height of the box, in meters.
 * @param depth The depth of the box, in meters.
 * @link [lovr.physics.newBoxShape](https://lovr.org/docs/lovr.physics.newBoxShape)
 */
export function newBoxShape(width?: number, height?: number, depth?: number): BoxShape;

/**
 * Creates a new CapsuleShape.
 *
 * @param radius The radius of the capsule, in meters.
 * @param length The length of the capsule, not including the caps, in meters.
 * @link [lovr.physics.newCapsuleShape](https://lovr.org/docs/lovr.physics.newCapsuleShape)
 */
export function newCapsuleShape(radius?: number, length?: number): CapsuleShape;

/**
 * Creates a new CylinderShape.
 *
 * @param radius The radius of the cylinder, in meters.
 * @param length The length of the cylinder, in meters.
 * @link [lovr.physics.newCylinderShape](https://lovr.org/docs/lovr.physics.newCylinderShape)
 */
export function newCylinderShape(radius?: number, length?: number): CylinderShape;

/**
 * Creates a new SphereShape.
 *
 * @param radius The radius of the sphere, in meters.
 * @link [lovr.physics.newSphereShape](https://lovr.org/docs/lovr.physics.newSphereShape)
 */
export function newSphereShape(radius?: number): SphereShape;

/**
 * Creates a new BallJoint.
 *
 * @param colliderA The first collider to attach the Joint to.
 * @param colliderB The second collider to attach the Joint to.
 * @param x The x position of the joint anchor point, in world coordinates.
 * @param y The y position of the joint anchor point, in world coordinates.
 * @param z The z position of the joint anchor point, in world coordinates.
 * @link [lovr.physics.newBallJoint](https://lovr.org/docs/lovr.physics.newBallJoint)
 */
export function newBallJoint(colliderA: Collider, colliderB: Collider, x: number, y: number, z: number): BallJoint;

/**
 * Creates a new DistanceJoint.
 *
 * @param colliderA The first collider to attach the Joint to.
 * @param colliderB The second collider to attach the Joint to.
 * @param x1 The x position of the first anchor point, in world coordinates.
 * @param y1 The y position of the first anchor point, in world coordinates.
 * @param z1 The z position of the first anchor point, in world coordinates.
 * @param x2 The x position of the second anchor point, in world coordinates.
 * @param y2 The y position of the second anchor point, in world coordinates.
 * @param z2 The z position of the second anchor point, in world coordinates.
 * @link [lovr.physics.newDistanceJoint](https://lovr.org/docs/lovr.physics.newDistanceJoint)
 */
export function newDistanceJoint(colliderA: Collider, colliderB: Collider, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): DistanceJoint;

/**
 * Creates a new HingeJoint.
 *
 * @param colliderA The first collider to attach the Joint to.
 * @param colliderB The second collider to attach the Joint to.
 * @param x The x position of the hinge anchor, in world coordinates.
 * @param y The y position of the hinge anchor, in world coordinates.
 * @param z The z position of the hinge anchor, in world coordinates.
 * @param ax The x component of the hinge axis.
 * @param ay The y component of the hinge axis.
 * @param az The z component of the hinge axis.
 * @link [lovr.physics.newHingeJoint](https://lovr.org/docs/lovr.physics.newHingeJoint)
 */
export function newHingeJoint(colliderA: Collider, colliderB: Collider, x: number, y: number, z: number, ax: number, ay: number, az: number): HingeJoint;

/**
 * Creates a new SliderJoint.
 *
 * @param colliderA The first collider to attach the Joint to.
 * @param colliderB The second collider to attach the Joint to.
 * @param ax The x component of the slider axis.
 * @param ay The y component of the slider axis.
 * @param az The z component of the slider axis.
 * @link [lovr.physics.newSliderJoint](https://lovr.org/docs/lovr.physics.newSliderJoint)
 */
export function newSliderJoint(colliderA: Collider, colliderB: Collider, ax: number, ay: number, az: number): SliderJoint;

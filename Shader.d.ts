import { ShaderType } from "./ShaderType";

export interface Shader {
  /**
   * Returns whether a Shader has a particular uniform variable.
   *
   * @param uniform The name of the uniform variable.
   * @link [Shader:hasUniform](https://lovr.org/docs/Shader:hasUniform)
   */
  hasUniform(uniform: string): boolean;

  /**
   * Updates a uniform variable in the Shader.
   *
   * @param uniform The name of the uniform to update.
   * @param value The new value of the uniform.
   * @link [Shader:send](https://lovr.org/docs/Shader:send)
   */
  send(uniform: string, value): void;
  sendBlock;
  sendImage;

  /**
   * Returns the type of the Shader, which will be "graphics" or "compute".
   *
   * @link [Shader:getType](https://lovr.org/docs/Shader:getType)
   */
  getType(): ShaderType;
}

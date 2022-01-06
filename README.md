# Figleaf package for Framer

**Generate an infinite number of textures, Perlin noise, visual effects and random shapes in Framer without coding !**

Figleaf is a package of 4 compoenents, allows the designer to create graphic elements and textures close to those found in nature :

* Pattern component allows the generation of textures using different Perlin noise functions. It also allows the creation of colours and gradients whose characteristics (hue, saturation, luminosity, alpha) are partially defined using random variables.

* Distortion component allows a Perlin noise type deformation to be applied to a graphic object.

* Circle and Rectangle components allow you to create partially determined shapes using random variables.

Figleaf allows the creation of graphic forms and textures of an infinite richness.

To use Figleaf :
* [Create a Framer account.](https://login.framer.com/sign-up/?ref=site&redirect=https%3A%2F%2Fframer.com%2F)
* Access to web version of Framer or install Framer on your computer.
* Access to [Figleaf Component](https://www.framer.com/showcase/project/jYAGqQXvxOitU1IFY1VF/?fbclid=IwAR1_tRgVoSXMBw1ICzf5e8MPDdplnNc4iBSzSZROMuRnrnV9f45WN3re3lE) in Framer showcase and clic on `Duplicate on Framer` 
or
* Create 5 code files in Framer Assets : `BasicFunctions.txt`, `Distortion.txt`, `Pattern.txt`, `Rectangle.txt` and `Circular.txt`
* Copy/paste [code of components](https://github.com/yannbellot/figleaf-framer/tree/main/Components) on files.
* Have fun !

Warning: Some display bugs may occur on Safari for Mac and iOS with the Distortion component because the SVG `<feDisplacementMap>` function is misinterpreted.

## Feature list

### Pattern component

* Choose between Solid, Gradient and Perlin pattern

#### Perlin noise pattern
* Choose between Turbulence and Fractal noise
* Adjust Frequency in x and y
* Adjust Octave
* Choose between Random and Manual Seed
* Adjust value of Manual Seed
* Choose between Discrete, Table, Linear and Gamma RGBA effects and Lighting effect
* Adjust multi-zone of RGBA effects
* Adjust Color, Intensity, Reflection, Azimut and Elevation of Lighting effect

#### Gradient color pattern
* Choose between Linear and Radial gradient
* Choose between Circular and Elliptic repartition for Radial gradient
* Choose stop color of gradient
* Adjust Hue random level of stop color
* Adjust Saturation random level of stop color
* Adjust Lightness random level of stop color
* Adjust Alpha random level of stop color
* Adjust gradient distribution and orientation

#### Solid color pattern
* Choose color
* Adjust Hue random level
* Adjust Saturation random level
* Adjust Lightness random level
* Adjust Alpha random level

### Distortion component (Perlin noise filter)
* Adjust Intensity of distortion
* Adjust Frequency in x and y
* Adjust Octave
* Choose between Random and Manual Seed
* Adjust value of Manual Seed
* Apply distortion to a child element

### Rectangular component
* Adjust width
* Adjust height
* Activate or deactivate border
* Adjust border color and size
* Adjust hsla random levels of border color
* Adjust the level of random distortion
* Disable random transformation of segments (top, right, bottom, left)

### Circular component
* Adjust diameter
* Activate or deactivate border
* Border color and size adjustment
* Adjust hsla random levels of border color
* Adjust the level of random distortion

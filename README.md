# Figleaf components for Framer

Figleaf is a package fo two compoenents, allows the designer to create graphic elements and textures close to those found in nature without coding :

* Distortion component allows a Perlin noise type deformation to be applied to a graphic object.

* Pattern component allows the generation of textures using different Perlin noise functions. It also allows the creation of colours and gradients whose characteristics (hue, saturation, luminosity, alpha) are partially defined using random variables.

The association of the 2 components Pattern and Distortion allows the creation of graphic forms and textures of an infinite richness.

To use Figleaf :
* [Create a Framer account](https://login.framer.com/sign-up/?ref=site&redirect=https%3A%2F%2Fframer.com%2F).
* Access to web version of Framer or install Framer on your computer.
* Create two code files in Framer and copy and paste code of two components.

Note : Some display bugs may occur on Safari for Mac and iOS with the Distortion component because the SVG `<feDisplacementMap>` function is misinterpreted.

## Feature list

### Distortion component (Perlin noise)
* Adjust Intensity of distortion
* Adjust Frequency in x and y
* Adjust Octave
* Choose between Random and Manual Seed
* Adjust value of Manual Seed
* Apply distortion to a child element

### Pattern component

* Choose between Solid, Gradient and Perlin pattern

#### Perlin noise
* Choose between Turbulence and Fractal noise
* Adjust Frequency in x and y
* Adjust Octave
* Choose between Random and Manual Seed
* Adjust value of Manual Seed
* Choose between Discrete, Table, Linear and Gamma RGBA effects and Lighting effect
* Adjust multi-zone of RGBA effects
* Adjust Color, Intensity, Azimut and Elevation of Lighting effect

#### Gradient color
* Choose between Linear and Radial gradient
* Choose between Circular and Elliptic repartition for Radial gradient
* Choose stop color of gradient
* Adjust Hue random level of stop color
* Adjust Saturation random level of stop color
* Adjust Lightness random level of stop color
* Adjust Alpha random level of stop color
* Adjust gradient distribution and orientation

#### Solid color
* Choose color
* Adjust Hue random level
* Adjust Saturation random level
* Adjust Lightness random level
* Adjust Alpha random level

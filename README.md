# Figleaf components for Framer

**Generate an infinite number of textures, Perlin noise, color and distortion effects in Framer without coding !**

[→ Access to Figleaf Component in Framer showcase.](https://www.framer.com/showcase/project/jYAGqQXvxOitU1IFY1VF/?fbclid=IwAR1_tRgVoSXMBw1ICzf5e8MPDdplnNc4iBSzSZROMuRnrnV9f45WN3re3lE)

Figleaf is a package of 3 components allows the designer to create graphic elements and textures close to those found in nature :

* Perlin component allows the generation of textures using different Perlin noise functions.

* Distortion component allows a Perlin noise type deformation to be applied to a graphic object.

* Colors component allows to generate adjustable random variations of color in hue, saturation, brightness, opacity, contrast, invert, sepia and grayscale.

Figleaf allows the creation of graphic forms and textures of an infinite richness.

To use Framer :
* [Create a Framer account.](https://login.framer.com/sign-up/?ref=site&redirect=https%3A%2F%2Fframer.com%2F)
* Access to web version of Framer or install Framer on your computer.

To use Figleaf with the demo file :
* [Access to Figleaf Component in Framer Showcase](https://www.framer.com/showcase/project/jYAGqQXvxOitU1IFY1VF/?fbclid=IwAR1_tRgVoSXMBw1ICzf5e8MPDdplnNc4iBSzSZROMuRnrnV9f45WN3re3lE) and clic on **Duplicate on Framer** 

To use figleaf by copy/past the code :
* Create 4 code files in Framer Assets : `BasicFunctions.txt`, `Distortion.txt`, `Perlin.txt` and `Colors.txt`.
* Copy/paste [code of components](https://github.com/yannbellot/figleaf-framer/tree/main/Components) on files.
* Have fun !

Warning: Some display bugs may occur on Safari for Mac and iOS with the Distortion component because the SVG `<feDisplacementMap>` function is misinterpreted.

## Feature list

### Perlin component

* Choose between Turbulence and Fractal noise
* Adjust Frequency in x and y
* Adjust Octave
* Choose between Random and Manual Seed
* Adjust value of Manual Seed
* Choose between Discrete, Table, Linear and Gamma RGBA effects and Lighting effect
* Adjust multi-zone of RGBA effects
* Adjust Color, Intensity, Reflection, Azimut and Elevation of Lighting effect

### Distortion component

* Choose children frame
* Adjust Intensity of distortion
* Adjust Frequency in x and y
* Adjust Octave
* Choose between Random and Manual Seed
* Adjust value of Manual Seed
* Apply distortion to a child element
* Adjust Smoothing

### Colors component

* Choose children frame
* Adjust random variation values in Hue, Saturation, Brightness, Opacity, Contrast, Invert, Sepia and Grayscale

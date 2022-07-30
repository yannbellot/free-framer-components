# Figleaf components for Framer

**Generate an infinite number of textures, Perlin noise, color and distortion effects in Framer without coding !**

Figleaf is a package of 3 components allows the designer to create graphic elements and textures close to those found in nature.

* Perlins component allows the generation of textures using different Perlin noise functions.

* Colors component allows you to create adjustable random color variation effects of the hue, saturation, brightness, opacity, contrast, invert, sepia, grayscale and blur.

* Distortions component allows you to create adjustable Perlin visual distortion effects.

Figleaf allows the creation of graphic forms and textures of an infinite richness.

To use Framer :
* [Create a Framer account.](https://login.framer.com/sign-up/?ref=site&redirect=https%3A%2F%2Fframer.com%2F)
* Access to web version of Framer or install Framer on your computer.

To use Figleaf :
* Create 3 code files in Framer Assets : `Perlins.txt`, `Colors.txt` and `Distortions.txt`.
* Copy/paste [code of components](https://github.com/yannbellot/figleaf-framer/tree/main/Components) on files.
* Have fun !

Warning: Some display bugs may occur on Safari for Mac and iOS with the Distortion component because the SVG `<feDisplacementMap>` function is misinterpreted.

## Feature list

### Perlins component

* Choose between Turbulence and Fractal noise
* Adjust Frequency in x and y
* Adjust Octave
* Choose between Random and Manual Seed
* Adjust value of Manual Seed
* Choose between Discrete, Table, Linear and Gamma RGBA effects and Lighting effect
* Adjust multi-zone of RGBA effects
* Adjust Color, Intensity, Reflection, Azimut and Elevation of Lighting effect

### Filters component

* Choose children frame

#### Distortions compoenent

* Adjust Intensity of distortion
* Adjust Frequency in x and y
* Adjust Octave
* Choose between Random and Manual Seed
* Adjust value of Manual Seed
* Apply distortion to a child element
* Adjust Smoothing
* Activate the animation of distortion
* Choose the number of repetitions of the animation
* Adjust the Amplitude and Duration of the animation 

#### Colors components

* Adjust random variation values in :
** Hue,
** Saturation,
** Brightness,
** Opacity,
** Contrast,
** Invert,
** Sepia,
** Grayscale
** Blur

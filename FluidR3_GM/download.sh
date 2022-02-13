sf=$1
svn checkout https://github.com/gleitz/midi-js-soundfonts/trunk/FluidR3_GM/$sf-mp3
svn export https://github.com/gleitz/midi-js-soundfonts/trunk/FluidR3_GM/$sf-mp3.js
svn export https://github.com/gleitz/midi-js-soundfonts/trunk/FluidR3_GM/$sf-mp3.js.gz

const watermark = require('dynamic-watermark')

const baseInputDir = `images/input/`
const baseOutputDir = `images/output/`
const baseImage = `${baseInputDir}base-image.png`

const commonOptions = {
  position: {
    logoX : 330,
    logoY : 355,
    logoHeight: 150,
    logoWidth: 150
  },
  type: 'image',
  source: baseImage
}

const options = {
  optionsImageWatermark: {
    logo: `${baseInputDir}watermark.jpg`,
    destination: `${baseOutputDir}image-with-logo.png`
  },
  optionsImageWatermarkTransparent: {
    logo: `${baseInputDir}watermark-transparent.png`,
    destination: `${baseOutputDir}image-with-logo-transparent.png`
  },
  optionsTextWatermark: {
    type: 'text',
    text: "Artes UP\n91 98888-8888",
    destination: `${baseOutputDir}image-with-text.png`,
    textOption: {
      fontSize: 15, //In px default : 20
      color: '#AAF122' // Text color in hex default: #000000
    },
    position: {
      logoX : 370,
      logoY : 470,
      logoHeight: 80,
      logoWidth: 150
    }
  }
}

Object.keys(options)
  .forEach(configName => {
    const option = Object.assign({}, commonOptions, options[configName])
    watermark.embed(option, status => console.log(configName, status))
  })

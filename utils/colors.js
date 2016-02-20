import colorPairsPicker from 'color-pairs-picker'
import chroma from 'chroma-js'

import { config } from 'config'

const colors = colorPairsPicker(config.baseColor, {
  contrast: 5.5,
})

const darker = chroma(config.baseColor).darken(10).hex()
const activeColors = colorPairsPicker(darker, {
  contrast: 7,
})

export default {
  colors,
  activeColors,
}

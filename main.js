import express from 'express'
import extractFrames from 'ffmpeg-extract-frames'

const app = express()
const port = 3000

try {
  let extract = async e => {
    await extractFrames({
      input: './video.mp4',
      output: './frames/frame-%d.png'
    })
  }
  extract()
} catch (err) {
  console.log(err)
}

app.listen(port, () => {
  console.log(`Running on port ${port}...`)
})

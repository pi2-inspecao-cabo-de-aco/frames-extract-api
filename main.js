import express from 'express'
import extractFrames from 'ffmpeg-extract-frames'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const extract = async (input) => {
  await extractFrames({
    input: input,
    output: './frames/frame-%d.png'
  })
}

app.post('/extract-frames', async (req, res) => {
  let { input } = req.body
  if (input) {
    await extract(input)
    res.json({ status: 'Extraction success' })
  } else {
    res.status(400).json({ error: 'Missing input' })
  }
})


app.listen(port, () => {
  console.log(`Running on port ${port}...`)
})

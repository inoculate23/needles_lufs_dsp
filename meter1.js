import { LoudnessMeter } from '@domchristie/needles'

var AudioContext = window.AudioContext || window.webkitAudioContext
var audioContext = new AudioContext()

var audioElement = document.querySelector('audio')
var source = audioContext.createMediaElementSource(audioElement)

// Listen to the output (optional)
source.connect(audioContext.destination)
var loudnessMeter = new LoudnessMeter({
    source: "/ArtificalLarnyx.mp3",
    workerUri: 'dist/needles-worker.js'
  })


  loudnessMeter.on('dataavailable', function (event) {
    event.data.mode // momentary | short-term | integrated
    event.data.value // -14
  })

  loudnessMeter.start()
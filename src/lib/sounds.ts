export function playThud(audioCtx: AudioContext) {
  const osc = audioCtx.createOscillator()
  const gain = audioCtx.createGain()
  osc.connect(gain)
  gain.connect(audioCtx.destination)
  osc.frequency.setValueAtTime(80, audioCtx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.4)
  gain.gain.setValueAtTime(0.05, audioCtx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5)
  osc.start(audioCtx.currentTime)
  osc.stop(audioCtx.currentTime + 0.5)
}

export function playGlitch(audioCtx: AudioContext) {
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.05, audioCtx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1
  }
  const source = audioCtx.createBufferSource()
  const gain = audioCtx.createGain()
  const filter = audioCtx.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 2000
  source.buffer = buffer
  source.connect(filter)
  filter.connect(gain)
  gain.connect(audioCtx.destination)
  gain.gain.value = 0.02
  source.start(audioCtx.currentTime)
}

export function playChime(audioCtx: AudioContext) {
  const osc = audioCtx.createOscillator()
  const gain = audioCtx.createGain()
  osc.connect(gain)
  gain.connect(audioCtx.destination)
  osc.type = 'sine'
  osc.frequency.setValueAtTime(880, audioCtx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1)
  gain.gain.setValueAtTime(0.03, audioCtx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2)
  osc.start(audioCtx.currentTime)
  osc.stop(audioCtx.currentTime + 1.2)
}

export function playWhoosh(audioCtx: AudioContext) {
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.8, audioCtx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length)
  }
  const source = audioCtx.createBufferSource()
  const filter = audioCtx.createBiquadFilter()
  const gain = audioCtx.createGain()
  filter.type = 'lowpass'
  filter.frequency.setValueAtTime(200, audioCtx.currentTime)
  filter.frequency.exponentialRampToValueAtTime(4000, audioCtx.currentTime + 0.8)
  source.buffer = buffer
  source.connect(filter)
  filter.connect(gain)
  gain.connect(audioCtx.destination)
  gain.gain.value = 0.04
  source.start(audioCtx.currentTime)
}

export function playLetterThud(audioCtx: AudioContext, index: number) {
  const osc = audioCtx.createOscillator()
  const gain = audioCtx.createGain()
  osc.connect(gain)
  gain.connect(audioCtx.destination)
  const startFreq = 200 - index * 20
  osc.frequency.setValueAtTime(startFreq, audioCtx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.15)
  gain.gain.setValueAtTime(0.02, audioCtx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2)
  osc.start(audioCtx.currentTime)
  osc.stop(audioCtx.currentTime + 0.2)
}

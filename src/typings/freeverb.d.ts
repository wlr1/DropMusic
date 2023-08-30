declare module 'freeverb' {
  export default class Freeverb {
    constructor(audioContext: AudioContext);
    input: AudioNode;
    output: AudioNode;
    roomSize: number;
    damp: number;
    wet: number;
    dry: number;
  }
}

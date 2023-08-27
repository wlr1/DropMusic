import AudioReverb from './AudioReverb/AudioReverb';
import SlowTrackMenu from './SlowTrackMenu/SlowTrackMenu';

interface AudioEffectsProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioEffects: React.FC<AudioEffectsProps> = ({ audioRef }) => {
  return (
    <>
      <div className="inline-flex border-t-2 border-neutral-500 mt-6 ">
        <h2 className=" m-auto text-white py-2 ">Audio Effects</h2>
      </div>
      <SlowTrackMenu audioRef={audioRef} />
      <AudioReverb audioRef={audioRef} />
    </>
  );
};

export default AudioEffects;

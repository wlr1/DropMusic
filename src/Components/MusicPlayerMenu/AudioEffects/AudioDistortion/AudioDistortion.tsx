import React, { useState, useEffect } from 'react';

interface AudioDistortionProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioDistortion: React.FC<AudioDistortionProps> = ({ audioRef }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [distortion, setDistortion] = useState<WaveShaperNode | null>(null);

  useEffect(() => {
    // Create the AudioContext only once when the component mounts
    const context: AudioContext | null = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    setAudioContext(context);

    // Clean up the AudioContext when the component unmounts
    return () => {
      if (context) {
        context
          .close()
          .catch((error: Error) =>
            console.error('Error closing AudioContext:', error)
          );
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    if (isChecked && audioContext && audioRef.current && !distortion) {
      // Create the distortionNode and connect it to the audio element
      const distortionNode: WaveShaperNode = audioContext.createWaveShaper();

      const curve: Float32Array = new Float32Array([1, 0.6, 0.9, 1.2, 0.9, 1]);
      distortionNode.curve = curve;

      const source: MediaElementAudioSourceNode =
        audioContext.createMediaElementSource(audioRef.current);
      source.connect(distortionNode);
      distortionNode.connect(audioContext.destination);

      setDistortion(distortionNode);
    } else if (!isChecked && distortion) {
      // Disconnect and clear distortionNode when not checked
      distortion.disconnect();
      setDistortion(null);
    }
  }, [isChecked, audioContext, audioRef, distortion]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="mt-4">
        <span className="ml-3 text-sm text-white mr-8">Audio Distortion</span>
        <label className="  inline-block cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className="block bg-gray-400 w-8 h-4 rounded-full"></div>
            <div
              className={`dot absolute top-[0.2px] ${
                isChecked ? 'right-0.5 bg-blue-500' : 'left-0.5 bg-gray-500'
              } w-4 h-4 rounded-full transition-all duration-300 transform`}
            ></div>
          </div>
        </label>
        <span
          className={`ml-2 text-${isChecked ? 'blue' : 'gray'}-400 text-xs`}
        >
          {isChecked ? 'On' : 'Off'}
        </span>
        <span className="text-sm text-red-500 ml-11">
          // not working with audio reverb
        </span>
      </div>
    </>
  );
};

export default AudioDistortion;

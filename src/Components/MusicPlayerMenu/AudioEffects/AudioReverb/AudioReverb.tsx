import React, { useState, useEffect } from 'react';
import ReverbList from './ReverbList';
interface AudioReverbProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioReverb: React.FC<AudioReverbProps> = ({ audioRef }) => {
  const [convolverNode, setConvolverNode] = useState<ConvolverNode | null>(
    null
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [sourceNode, setSourceNode] =
    useState<MediaElementAudioSourceNode | null>(null);
  const [selectedImpulse, setSelectedImpulse] = useState<string | null>(null);

  const impulseFiles = [
    'space',
    'CUST_hole_room',
    'darklong',
    'Studio',
    'Back Room',
    'Clear Ambience',
  ];

  useEffect(() => {
    const audioContext = new window.AudioContext();
    if (isChecked) {
      if (!convolverNode) {
        const newConvolverNode = audioContext.createConvolver();
        fetch(
          `/DropMusic/src/assets/impulseResponsiveSounds/${
            selectedImpulse + '.wav'
          } `
        )
          .then((response) => response.arrayBuffer())
          .then((buffer) => audioContext.decodeAudioData(buffer))
          .then((impulseResponseBuffer) => {
            newConvolverNode.buffer = impulseResponseBuffer;
            setConvolverNode(newConvolverNode);
            if (audioRef.current) {
              if (sourceNode) {
                sourceNode.disconnect();
              }
              const newSourceNode = audioContext.createMediaElementSource(
                audioRef.current
              );
              newSourceNode.connect(newConvolverNode);
              newConvolverNode.connect(audioContext.destination);
              setSourceNode(newSourceNode);
            }
          })
          .catch((error) => {
            console.error('Error loading impulse response:', error);
          });
      }
    } else {
      if (sourceNode) {
        sourceNode.disconnect();
        setSourceNode(null);
      }
      if (convolverNode) {
        convolverNode.disconnect();
        setConvolverNode(null);
      }
    }

    return () => {
      if (sourceNode) {
        sourceNode.disconnect();
      }
      if (convolverNode) {
        convolverNode.disconnect();
      }
    };
  }, [isChecked, audioRef, convolverNode, sourceNode]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {/* switch button */}
      <div className="mt-6 flex">
        <span className="ml-3 text-sm text-white mr-8">Audio Reverb</span>
        <label className="  inline-block cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={handleToggle}
            />
            <div className="block bg-gray-400 w-8 h-4 rounded-full"></div>
            <div
              className={`dot absolute top-[0.2px]  ${
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
        {/* list */}

        <ReverbList
          impulseFiles={impulseFiles}
          selectedImpulse={selectedImpulse}
          onSelectedImpulse={setSelectedImpulse}
        />
      </div>
    </>
  );
};

export default AudioReverb;

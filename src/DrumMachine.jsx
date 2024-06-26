import { useEffect } from 'react';

function DrumMachine() {
  const Audioclips = [
    {
      keyTrigger: "Q",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      description: "Heater-1",
    },
    {
      keyTrigger: "W",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
      description: "Heater-2",
    },
    {
      keyTrigger: "E",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
      description: "Heater-3",
    },
    {
      keyTrigger: "A",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
      description: "Heater-4",
    },
    {
      keyTrigger: "S",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
      description: "Clap",
    },
    {
      keyTrigger: "D",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
      description: "Open-HH",
    },
    {
      keyTrigger: "Z",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
      description: "Kick-n-Hat",
    },
    {
      keyTrigger: "X",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
      description: "Kick",
    },
    {
      keyTrigger: "C",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
      description: "Closed-HH",
    },
  ];

  const playAudio = (event) => {
    const clip = Audioclips.find((clip) => clip.keyTrigger === event.key.toUpperCase());
    if (!clip) return;
    document.getElementById(clip.keyTrigger).play().catch(console.error);
    document.getElementById("display").innerHTML = clip.description;
  };

  const playSound = (clip) => {
    document.getElementById(clip.keyTrigger).play().catch(console.error);
    document.getElementById("display").innerHTML = clip.description;
  };

  useEffect(() => {
    window.addEventListener('keydown', playAudio);
    return () => {
      window.removeEventListener('keydown', playAudio);
    };
  });

  return (
    <div className="container" id="drum-machine">
      <h1>Drum Machine</h1>
      <div className="drum-pads">
        {Audioclips.map((clip) => (
          <button
            key={clip.keyTrigger}
            id={clip.description}
            className="drum-pad"
            onClick={() => playSound(clip)}
          >
            <audio className="clip" src={clip.src} id={clip.keyTrigger}></audio>
            {clip.keyTrigger}
          </button>
        ))}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default DrumMachine;
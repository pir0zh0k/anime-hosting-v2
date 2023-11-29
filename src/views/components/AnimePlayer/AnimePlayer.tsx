import ReactPlayer from 'react-player';

import { ControlsVideo } from './VideoControls/ControlsVideo';
import { AnimePlayerProps } from '../../../types/animePlayer.type';
import { useState, useRef } from 'react';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';

export const AnimePlayer = ({
  episode,
  episodes,
  onChangeEpisode,
}: AnimePlayerProps) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    volume: 0.5,
    start: 0,
    playedSeconds: 0,
    end: 1,
  });

  const refPlayer = useRef<ReactPlayer | null>(null);
  const refPlayerWrapper = useRef<HTMLDivElement>(null);

  function getDuration(duration: number) {
    setPlayerState({ ...playerState, end: duration });
  }

  const togglePlay = () => {
    setPlayerState({ ...playerState, playing: !playerState.playing });
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerState({ ...playerState, volume: Number(e.target.value) });
  };

  const handleProgress = (progress: OnProgressProps) => {
    setPlayerState({
      ...playerState,
      playedSeconds: progress.playedSeconds,
    });
  };

  const changeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (refPlayer.current) refPlayer.current.seekTo(Number(e.target.value));
  };

  const toggleFullScreen = () => {
    if (refPlayerWrapper.current) screenfull.toggle(refPlayerWrapper.current);
  };

  console.log(playerState);

  return (
    <div className="my-5">
      <h1 className="text-3xl text-center">Серия {episode}</h1>
      <div ref={refPlayerWrapper} className="my-5 relative">
        <ControlsVideo
          episode={episode}
          episodes={episodes}
          onChangeEpisode={onChangeEpisode}
          togglePlay={togglePlay}
          playerState={playerState}
          handleVolume={handleVolume}
          changeProgress={changeProgress}
          toggleFullscreen={toggleFullScreen}
        />
        {episodes?.map(ep =>
          ep.episode == Number(episode) ? (
            <ReactPlayer
              key={ep.episode}
              controls={false}
              height="auto"
              width="100%"
              url={`https://cache.libria.fun${ep.hls.fhd}`}
              onDuration={getDuration}
              playing={playerState.playing}
              volume={playerState.volume}
              ref={refPlayer}
              onProgress={handleProgress}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Music2, Volume2, ChevronDown } from "lucide-react";
import { playlistName, tracks } from "@/data/music";
import { cn } from "@/lib/utils";

/** Floating music player. Never autoplays — playback needs a user gesture. */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const track = tracks[current]!;

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume, current]);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        await el.play();
        setPlaying(true);
      }
    } catch {
      setPlaying(false);
    }
  };

  const step = (dir: number) => {
    setCurrent((c) => (c + dir + tracks.length) % tracks.length);
    setPlaying(false);
    setProgress(0);
  };

  const fmt = (s: number) =>
    Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00";

  return (
    <div className="fixed bottom-3 right-3 z-[60] w-[min(20rem,calc(100vw-1.5rem))]">
      <audio
        ref={audioRef}
        src={track.src}
        preload="none"
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => step(1)}
      />

      <div className="glass-panel overflow-hidden rounded-3xl">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-2 px-2.5 py-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/60 bg-[image:var(--gradient-violet)] text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <span className="min-w-0">
            <span className="block truncate text-sm text-foreground">{track.title}</span>
            <span className="block truncate text-xs text-muted-foreground">{playlistName}</span>
          </span>
          <Music2 className="h-4 w-4 shrink-0 text-gold" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Collapse player" : "Expand player"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground"
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
          </button>
        </div>

        <div className={cn("px-3", open ? "pb-3" : "pb-2")}>
          <input
            type="range"
            aria-label="Seek"
            min={0}
            max={duration || 0}
            value={progress}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (audioRef.current) audioRef.current.currentTime = v;
              setProgress(v);
            }}
            className="h-1 w-full accent-[oklch(0.83_0.12_86)]"
          />
          <div className="mt-1 flex items-center justify-between text-[0.65rem] tabular-nums text-muted-foreground">
            <span>{fmt(progress)}</span>
            <span>{fmt(duration)}</span>
          </div>

          {open ? (
            <div className="mt-2 flex items-center justify-center gap-2">
              <button type="button" onClick={() => step(-1)} aria-label="Previous track" className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground">
                <SkipBack className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next track" className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground">
                <SkipForward className="h-4 w-4" />
              </button>
            </div>
          ) : null}


          {open ? (
            <div className="mt-3 border-t border-border pt-3">
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  type="range"
                  aria-label="Volume"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="h-1 w-full accent-[oklch(0.83_0.12_86)]"
                />
              </div>
              <ul className="mt-3 grid gap-1.5">
                {tracks.map((t, i) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setCurrent(i);
                        setPlaying(false);
                        setProgress(0);
                      }}
                      className={cn(
                        "flex min-h-10 w-full items-center gap-2 rounded-xl px-3 text-left text-sm",
                        i === current ? "bg-gold/10 text-gold" : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <Music2 className="h-3.5 w-3.5 shrink-0" />
                      <span className="min-w-0 truncate">{t.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

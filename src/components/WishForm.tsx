import { useState, type FormEvent } from "react";
import { Sparkles } from "lucide-react";
import { GoldButton } from "./GoldButton";

export type WishInput = { name: string; message: string };

export function WishForm({ onSubmit }: { onSubmit: (input: WishInput) => void }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const m = message.trim();
    if (n.length < 2) return setError("Please tell us your name (2+ characters).");
    if (m.length < 5) return setError("Your wish is a little too short.");
    if (n.length > 40) return setError("Name must be under 40 characters.");
    if (m.length > 500) return setError("Wish must be under 500 characters.");

    setError(null);
    onSubmit({ name: n, message: m });
    setName("");
    setMessage("");
    setDone(true);
    window.setTimeout(() => setDone(false), 4000);
  };

  const inputClass =
    "min-h-12 w-full rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-ring/40";

  return (
    <form onSubmit={submit} className="glass-panel rounded-3xl p-5 sm:p-7">
      <h3 className="script-title text-2xl">Leave One Last Wish</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Your words will live here forever. ✨
      </p>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1.5">
          <span className="text-xs uppercase tracking-[0.16em] text-gold-soft">Your Name</span>
          <input
            className={inputClass}
            value={name}
            maxLength={40}
            onChange={(e) => setName(e.target.value)}
            placeholder="Who's wishing?"
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs uppercase tracking-[0.16em] text-gold-soft">Your Birthday Wish</span>
          <textarea
            className={`${inputClass} min-h-28 resize-y`}
            value={message}
            maxLength={500}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your wish here..."
          />
        </label>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <GoldButton type="submit" fullWidth>
          Submit Wish 💌
        </GoldButton>

        {done ? (
          <p className="animate-rise flex items-center justify-center gap-2 rounded-2xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
            <Sparkles className="h-4 w-4" /> Your wish is now part of Tokyo's night sky.
          </p>
        ) : null}
      </div>
    </form>
  );
}

# Tokyo's Enchanted Night

Create a fully responsive public birthday website for a girl named Tokyo.

This website will be shared publicly through Instagram/WhatsApp on her birthday, so it should feel like a beautiful, premium, cinematic birthday experience.

Use the attached reference image as the visual design inspiration.

IMPORTANT

Build with React + TypeScript + Tailwind CSS.

Mobile-first design.

Must work perfectly on phones from 320px to 430px width, tablets and desktop.

Absolutely no horizontal scrolling.

Do not simply shrink the desktop version for mobile.

Reorganize sections specifically for mobile and desktop also.

Use reusable React components.

Keep all text/content in separate data files so I can edit them later.

Use placeholder images/media for now.

I will later replace the images, screenshots, videos and audio using Antigravity.

Make replacing media extremely easy.

VISUAL STYLE

The design should feel:

magical + cinematic + elegant + emotional + premium

Use:

Midnight navy background

Deep purple

Soft violet

Warm gold

Small pink highlights

Stars

Moonlight

Lanterns

Subtle glowing particles

Elegant serif typography

Handwritten/script typography for special headings

Thin gold borders

Soft glassmorphism

Parchment-style letter cards

Cinematic fantasy atmosphere

Avoid:

childish birthday templates

excessive bright colors

balloons/confetti everywhere

generic Bootstrap-style cards

overly flashy animations

The overall feeling should be:

"A magical birthday night created especially for Tokyo."

NAVIGATION

Desktop navigation:

Home

About Tokyo

Birthday Letter

Wishes

Gallery

Leave a Wish

Mobile:

Use a beautiful hamburger menu.

The menu must be easy to use with one hand.

HOME / HERO

Create a cinematic hero section.

Display:

Happy Birthday

Tokyo

Subtitle:

"Not just a game character,
but the player of my heart. 💜"

Include:

Tokyo character image placeholder

Animated night-sky background

Stars

Lanterns

Soft particles

Birthday countdown

Elegant glowing effects

Countdown:

Days
Hours
Minutes
Seconds

Primary button:

"Enter Tokyo's World ✨"

Secondary button:

"Leave a Birthday Wish 💌"

On mobile:

Character image should not cover the text.

Countdown should become a compact 2x2 grid.

Buttons should become full-width or stacked.

Hero should fit naturally inside the screen.

ABOUT TOKYO

Heading:

About Tokyo

Create two large feature cards.

Our Rusher ⚡

"Fearless, stubborn and unstoppable.

You rush into everything like there's no tomorrow, breaking barriers and taking down every challenge like a true beast."

Our Supporter 💜

"You've got my back, always.

Healing, covering, and believing in us even when things look tough.

The real MVP in every match and in life."

Create a Quick Facts section:

🎮 Loves gaming

😤 Gets angry in milliseconds

🧠 Professional overthinker

😂 Laughs at random things

💜 Makes ordinary days memorable

Make the facts editable through a data object.

BIRTHDAY LETTER

Create a beautiful parchment-style section.

Title:

A Letter FromLevi ✒️

Display a short preview.

Example:

"Dear Tokyo,

Another year has passed, and I just wanted to thank the universe for giving me a person like you.

You somehow make ordinary moments feel special.

Keep laughing, keep shining, and never change who you are.

Happy Birthday, Tokyo. 💜

—Levi"

Button:

Read Full Letter 💌

When clicked:

Open an elegant full-screen/modal letter.

On mobile the letter must fit perfectly without awkward scrolling or clipping.

WISHES

This is one of the most important features.

Heading:

All Wishes 💌

Display birthday wishes in beautiful cards.

Each wish:

Avatar

Name

Message

Date

Like/favorite button

Like count

Example:

Shadow

"Happy Birthday Tokyo 💜
Keep shining always ✨"

Create several realistic placeholder wishes.

LEAVE A WISH

Create an interactive form.

Fields:

Your Name

Your Birthday Wish

Add a Photo (Optional)

Button:

Submit Wish 💌

For now:

Store submitted wishes using localStorage.

Show the new wish immediately.

Add basic validation.

Display a success animation/message.

Structure the code so I can later connect Firebase/Supabase or another backend.

GALLERY

Heading:

Tokyo's Gallery 📸

Categories:

Photos

Gaming

Screenshots

Memories

Random

Use placeholder images.

Desktop:

Elegant multi-column gallery.

Mobile:

2-column gallery.

When an image is tapped:

Open a fullscreen lightbox.

Include:

Close button

Previous/next

Image

Optional caption

Make it swipe-friendly on mobile.

BIRTHDAY MOMENTS

Create a small timeline called:

Little Moments ✨

Example:

The Day We Met

"The beginning of everything."

First Conversation

"That awkward little hello that became something memorable."

First Game

"The beginning of our gaming chaos."

Endless Conversations

"Somehow there was always something to talk about."

Today

"Another birthday, another memory."

Keep the timeline editable through data.

Desktop = horizontal/beautiful timeline.

Mobile = vertical timeline.

MUSIC PLAYER

Create a small floating music player.

Features:

Play/pause

Track name

Progress bar

Previous/next

Playlist

Volume

Do NOT autoplay audio.

Require user interaction before playing.

Use placeholder audio files.

FOOTER

Create an elegant night-sky footer.

Text:

Made with ❤️ byLevi

For Tokyo, today, tomorrow and always. ✨

Include social icons.

ANIMATIONS

Use subtle animations:

Fade-in

Slide-up

Floating stars

Twinkling stars

Gentle glow

Card hover

Smooth scrolling

Letter opening

Page transitions

Do not over-animate.

Respect prefers-reduced-motion.

RESPONSIVE REQUIREMENTS

Test specifically at:

320px

360px

375px

390px

414px

430px

tablet

desktop

At mobile:

No horizontal scrolling

No overlapping elements

No tiny text

No clipped images

Cards stack correctly

Countdown becomes 2x2

Gallery becomes 2 columns

Timeline becomes vertical

Navigation becomes hamburger

Buttons are touch-friendly

Modals fit the viewport

Music player remains compact

CODE STRUCTURE

Use a clean structure such as:

components/

pages/

data/

assets/

hooks/

utils/

Create separate data files for:

wishes

gallery

timeline

birthday letter

music

quick facts

Do NOT put all content directly inside JSX.

Use placeholder media paths that I can easily replace later.

FINAL DESIGN GOAL

The final website should feel like:

A premium cinematic birthday card + interactive guestbook + memory gallery.

It should make someone opening the link think:

"Wow, someone really created an entire little world for her birthday."

Use the attached reference image as the visual inspiration, but create an original implementation rather than copying it exactly.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/81c67c19-abd3-4c8c-be9d-32eb6b43215e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

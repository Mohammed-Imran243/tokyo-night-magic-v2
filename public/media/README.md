# Replacing media

Drop your own files here and point the data files at them:

- Hero portrait  -> src/data/site.ts  (`hero.characterImage`)
- Gallery images -> src/data/gallery.ts (`src: "/media/your-photo.jpg"`)
- Music tracks   -> src/data/music.ts  (`src: "/media/track-1.mp3"`)
- Wish avatars   -> src/data/wishes.ts (`photo: "/media/friend.jpg"`)

Anything placed in this folder is served at `/media/<filename>`.

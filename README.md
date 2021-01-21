# Pomodoro timer

This is a distraction free simplistic pomodoro timer. It starts to count down 25 minutes when you load the screen, and stops after 25 minutes. I put this on my second display full screen over all the distracting applications like mail or chat. Quite often pomodoro timers have something going on in their screens - something that may distract you. Distraction is quite opposite what pomodoro timers should do for you - giving a time to focus.

[Wikipedia article about Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique)

How to use:

- Reload your screen to restart.
- There is no timer for the break. You should rest outside of your desk. Come back when you have rested.
- There is no pause. You have lost your pomodoro if something is distracting you. Have a break and start a new pomodoro.
- There are no settings. You should focus 25 minutes and not fiddling with the settings.
- Shorter or longer times to focus? Bad luck, just focus 25 minutes and get things done.

There are something to improve, though:

- You might stare at the timer. I do this quite often. It's relaxing, but not what you should do.
- Let others know that you are focusing and come back later. Ideas for this are welcome, both remote and colocated environments.
- I'd like this to have a seven segment display. I like seven segment displays.

## Developing

### Prerequisites

You need:

- Node.js (v12 in the time of developing)

### Preparing

After checking out the git project, run the following command to install the npm packages:

    yarn

### Coding

Start a developer environment:

    yarn start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Test coverage is not too high at the moment.

### Installing

Make an installation package:

    yarn build

Copy the contents of the `build` directory to the web server of your choice.

## MIT License

Copyright 2021 Heikki Ritola

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

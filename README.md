# Pomodoro timer

This is a distraction free simplistic pomodoro timer. It starts to count down 25 minutes when you load the screen, and stops after 25 minutes. I put this on my second display full screen over all the distracting applications like mail or chat. Quite often pomodoro timers have something going on in their screens - something that may distract you. Distraction is quite opposite what pomodoro timers should do for you - giving a time to focus.

[Wikipedia article about Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique)

Here is the screenshot:

![Screenshot](img/screenshot.png)

How to use:

- Reload your screen to restart.
- There is no timer for the break. You should rest outside of your desk. Come back when you have rested.
- There is no pause. You have lost your pomodoro if something is distracting you. Have a break and start a new pomodoro.
- There are no settings. You should focus 25 minutes and not fiddling with the settings.
- Shorter or longer times to focus? Bad luck, just focus 25 minutes and get things done.

There are something to improve, though:

- Install this somewhere to be used.
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

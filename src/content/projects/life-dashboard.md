---
title: Life Dashboard
kind: built
order: 3
full: true
panels:
  - { src: life-dashboard/today.png, alt: "Today: 7.4 hours of sleep, workout done, 8,412 steps" }
  - { src: life-dashboard/weather.png, alt: "Weather: 57 degrees and cloudy, with an hourly forecast" }
  - { src: life-dashboard/week.png, alt: "Week: two of three workouts, drawn as planets" }
  - { src: life-dashboard/month.png, alt: "Month: a calendar coloured by each day's wins" }
  - { src: life-dashboard/moon.png, alt: "A monthly feature page: the moon over water" }
  - { src: life-dashboard/books.png, alt: "Books: a shelf showing 3 of 12 read this year" }
  - { src: life-dashboard/sun.png, alt: "A sun with a check mark, part of the workout celebration" }
  - { src: life-dashboard/done.png, alt: "Workout done, with sparkles" }
links:
  - label: Code
    href: https://github.com/hellomaxlee/life-dashboard
---
An LED panel on my wall that turns my own data into pixel art. A Python service pulls sleep and workouts from Apple Health, my reading list from Goodreads, the weather, and live subway delays, and draws each as a 64×64 screen.

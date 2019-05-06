# PROJECT: Brave Beetle

## What this app is / will be
A leader board that tracks the Win/Loss ratios of summoners that play ultimate bravery.

Ultimate bravery is a game mode that randomly selects a champion for a summoner (player)
and assigns their champion a randomly generate loadout. This loadout can be either be net
postive, negative, neutral in how it affects the champion in terms of stats. Hence this 
namesake of ultimate bravery.

Where this App comes into play is that Ultimate Bravery itself DOES NOT record matches 
of players who participated in playing. NOR does it record whether or not the players 
are abiding by the the selected champion and assigned load out. This app is a single source 
of truth that let's players who are participating in Ultimate Bravery know eachothers assigned
champions and load outs. To prevent cheating and allow anti-win counter measures (mulligans).

## Core features:

###### Abiding by CrUD:
- Create a session for participating players
  - Create loadouts and champion loadouts
- Read match history
  - Read for matching loadouts as created by this app
  - Validate that the match abides to this app
- Update an existing players W/L ratio if the match was valid
  - A valid match is when 2 players agree to 1v1 in UB
    - That match's stats: 
      - Both players are in that match
      - Both players followed their randomly assigned loadouts
- Delete sessions when a match is completed.

## Track my progress here!

https://trello.com/b/j6dz8JBv/project-brave-beetle

## Follow me on Twitter for updates as well!

https://twitter.com/ryden_exe

## Changelog (Coming soon!)
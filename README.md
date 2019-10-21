# cahReact

## Stages of the game

1. User sets user name
    - Have a form for user submission of their displayed name in game and in the lobby list

2. User can either create a game or join an already active game
    - Use react components to auto generate the list of games.
    - If user creates game
        - Stage 3 begins
    - If user joins a game
        - Stage 4 begins

3. Create Game
    - Display User list react component
    - Display game options react component
        - Select which expansions to use
        - Select winning score count
        - Select how many can be in the lobby
        - Select if lobby is private
    - Start game (if there are 2 or more players in the lobby.)

4. Join game / Start Game
    - Pull list of cards from database
    ```
             Cards ( Database )
             /               \
        White Cards      Black Cards
        /         \      /          \
    Expansion    Text  Text     Expansion
    
    Find all cards where expansion = host choice in settings pane.
    ```
    - Render one black card picked random `Math.floor(Math.random()*blackCards.length)` in the black card div with a react card component.
    - Give all users in game 7 random white cards
      - Remove cards from main white card array so there wont be duplicates
      - After round end add cards back to white card array so they can be added to players hand again later (chances of this potentially happening are slimg anyways. But its good to have the possibility.)

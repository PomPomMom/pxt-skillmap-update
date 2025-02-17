# Emotion Game

## Introduction
In this tutorial, you'll create a simple **Emotion Game** using **MakeCode Arcade** with Python. You'll learn about:

- **Variables**:
  - `Sprite` variables for character images
  - `Integer` variables for score
  - `String` variables for emotions
  - `Boolean` values for checking answers
- **Conditionals** (`if`, `elif`, `else`) to change game logic
- **Functions** (`def`) to organize your code

### ~ tutorialHint
In this game, pressing **Up** when the emotion is "happy" gives you a point. Otherwise, you lose a point. The emotion changes in a loop between "happy", "sad", and "angry."
###

---

## **Step 1: Setting Up Your Variables**
Let's start by creating the necessary **global variables**.

```python
mySprite: Sprite = None
mySprite2: Sprite = None
mySprite3: Sprite = None
currentEmotion = ""
~ tutorialHint
mySprite, mySprite2, and mySprite3 are Sprite image variables.
currentEmotion is a string variable that tracks the emotion.

Step 2: Creating the nextEmoji() Function
Now, let's define a function to update the emotion and display the correct sprite.

python
Copy
Edit
def nextEmoji():
    global mySprite3, mySprite2, mySprite, currentEmotion  # Access global variables
    
    mySprite3 = sprites.create(assets.image("""
        angry
    """), SpriteKind.player)
    mySprite2 = sprites.create(assets.image("""
        sad
    """), SpriteKind.player)
    mySprite = sprites.create(assets.image("""
        Happy
    """), SpriteKind.player)

    # Conditional Logic to Change Emotions
    if currentEmotion == "happy":
        currentEmotion = "sad"
    elif currentEmotion == "sad":
        currentEmotion = "angry"
    else:  # If it's "angry"
        currentEmotion = "happy"

    # Show only the correct emotion
    if currentEmotion != "happy":
        mySprite.set_flag(SpriteFlag.INVISIBLE, True)
    if currentEmotion != "sad":
        mySprite2.set_flag(SpriteFlag.INVISIBLE, True)
    if currentEmotion != "angry":
        mySprite3.set_flag(SpriteFlag.INVISIBLE, True)
~ tutorialHint
The if, elif, and else statements update the currentEmotion string.
We use Sprite Image Variables to display the correct emotion.
Booleans are used with set_flag(SpriteFlag.INVISIBLE, True) to hide incorrect sprites.
Step 3: Handling Player Input
Now, let's create the on_up_pressed() function to check the player's response.

python
Copy
Edit
def on_up_pressed():
    if currentEmotion == "happy":  # Check if the emotion is "happy"
        info.change_score_by(1)
        game.splash("Yes!")  # Show a message
        nextEmoji()  # Move to the next emotion
    else:
        info.change_score_by(-1)
        game.splash("Better Luck Next time!")
        nextEmoji()
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)
~ tutorialHint
if checks if the emotion is "happy".
else runs when the condition is false (not happy).
The info.change_score_by(1) updates an integer variable (score).
Step 4: Initializing the Game
Now, let's set up the initial state of the game.

python
Copy
Edit
currentEmotion = "angry"  # Start with "angry"
info.set_score(0)  # Set initial score to 0
nextEmoji()  # Show the first emoji
~ tutorialHint
The integer variable info.set_score(0) keeps track of the score.
nextEmoji() runs at the start to display the first emotion.
Final Challenge
Test your game! Can you modify the code to add more emotions? Try adding a "surprised" emotion and update the logic to include it.

~ tutorialCompleted
The game should: ✅ Start with "angry"
✅ Change emotions in the correct order
✅ Check for correct answers using if, elif, and else
✅ Update the score
✅ Display the correct sprite

# Emotion Game

## Introduction
In this tutorial, you'll create a simple **Emotion Game** using **MakeCode Arcade** with Python. You'll learn about:

- **Variables**:
  - `None` variable types to initiage an empty variable 
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
currentEmotion = "angry"
```
### ~ tutorialHint
`mySprite`, `mySprite2`, and `mySprite3` are Sprite image variables.
`currentEmotion` is a string variable that tracks the emotion.` 
###


## **Step 2: Creating the nextEmoji() Function**
Now, let's define a function to update the emotion and display the correct sprite. in the tool kit, scroll down and click on the ```advanced``` section, then click on ```Functions```. Click on "Make a Function". Name the function: nextemoji.

## **Step 3: Adding a sprite variable to your function`**
In Makecode Arcade, you must call a sprite with the `variable name`, Arcade `call code`, an `image`, and a `type`.
- Name the sprite `mySprite`
- Make it equal to the Arcade call code: `sprites.create`
- In parentheses, add a pre-made image by calling `"""happy"""`
- after a comma, make the sprite a player kind by adding `SpriteKind.player`

##
```python
    def nextEmoji():

    mySprite = sprites.create(assets.image(""" happy """), SpriteKind.player)
 ```
## **Step 4: Adding two more sprites***
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

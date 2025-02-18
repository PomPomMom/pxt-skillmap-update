
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
![Blue Function container witht the name newEmoji](https://raw.githubusercontent.com/PomPomMom/Images/refs/heads/main/next%20emoji%20function.png)

## **Step 3: Adding a sprite variable to your function**
In Makecode Arcade, you must call a sprite with the `variable name`, Arcade `call code`, an `image`, and a `type`.
- Name the sprite `mySprite`
- Make it equal to the Arcade call code: `sprites.create`
- In parentheses, add a pre-made image by calling `"""happy"""`
- after a comma, make the sprite a player kind by adding `SpriteKind.player`
When you begin typine the call code `sprites.create` a popup should allow you to click to finish the code.
![Sprite initializing with popup to complete the code.](https://raw.githubusercontent.com/PomPomMom/Images/5d7ea68c31ab68517b403e690cee94b6c796d8ee/Create%20sprite%20python%20makecode%20arcade.png)

##
```python
    def nextEmoji():

    mySprite = sprites.create(assets.image(""" happy """), SpriteKind.player)
 ```

## **Step 4: Adding an Image to your Sprite Variable.**
When you have initialized your sprite, a paint palate icon will appear next to your code. Click on it.
![Paint palate icon next to sprite code](https://github.com/PomPomMom/Images/blob/5d7ea68c31ab68517b403e690cee94b6c796d8ee/Image%20chooser.png?raw=true)

At the top, choose "My Assets" and pick the happy face emoji. Then click Done in the bottom left corner.
```mySprite = sprites.create(assets.image("""Happy"""), SpriteKind.player)```


## **Step 5: Adding two more sprites**
Add two more sprites using the same procedure as before, but give `mySprite2` the `sad` image and `mySprite3` the `angry` image.

```
    mySprite2 = sprites.create(assets.image("""
        sad
    """), SpriteKind.player)
    mySprite3 = sprites.create(assets.image("""
        angry
    """), SpriteKind.player)
```

## **Complete!**
You have started your emoji game and learned about variables! Continue in the next lesson to add conditionals to your game.
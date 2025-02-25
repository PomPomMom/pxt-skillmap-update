# Activity 1: Click the Emotion Game


## Introduction
In this tutorial, you'll create a simple **Emotion Game** using **MakeCode Arcade** with Python. You'll learn about:


- **Variables**:
  - `None` variable types to initiage an empty variable
  - `Sprite` variables for character images
  - `Integer` variables for score
  - `String` variables for emotions
- **Conditionals** (`if`, `elif`, `else`) to change game logic
- **Functions** (`def`) to organize your code


### Hint
In this game, pressing **Up** when the emotion is "happy" gives you a point. Otherwise, you lose a point. The emotion changes in a loop between "happy", "sad", and "angry."


---


## **Step 1: Set the Background**
We will use a pre-made background that matches our game. From the toolkit, Click on `Scene` and click and drag the `Set Background Image to img`

![Set background image code to drag into the editor space](https://raw.githubusercontent.com/PomPomMom/Images/refs/heads/main/set%20background%20image%20python%20makecode%20arcade.png)


## **Step 2: Set the Image for the Background**
Next to the first line of code there should be a paint palate icon. Click onthe icon. In the window that pops up, click `My Assets` at the top. Choose the direction image for the background. 

![Palate icon appears next to the set background code](https://raw.githubusercontent.com/PomPomMom/Images/refs/heads/main/background%20image%20python.png)


## **Step 3: Set up a score variable**
This game will keep score for every time the player makes the correct choice. Let's set a variable to keep score.
We will set this as an info type so it will be displayed on the screen.

```
info.set_score(0)
```
## **Step 4: Set Up Sprite Variables**
Now let's create the necessary **global variables**. We will have 3 emotion sprites and a variable called `currentEmotion` so the program can keep track of which emotion is showing.
Choose a name for each variable. One for happy, one for sad, and one for angry
```python
happy: Sprite = None
sad: Sprite = None
angry: Sprite = None
currentEmotion = "angry"
```
A **global variable** is a vairable that can be used anywhere in your code. This is different from **local variables** which can only be used in a section of the code.

### Hint
`happy`, `sad`, and `angry` are Sprite image variables.
`currentEmotion` is a string variable that tracks the emotion.`

## **Step 5: Create the nextEmoji() Function**
Now, let's define a function to update the emotion and display the correct sprite. 
We will use the `def` keyword to define the function, and we will call the function nextEmoji

```def nextEmoji(): ```

Anything included in this function must be indented beneath it.

## **Step 6: Add a sprite variable to your function**
In Makecode Arcade, you must call a sprite with the `variable name`, Arcade `call code`, an `image`, and a `type`.
- Name the sprite `happy`
- Make it equal to the Arcade call code: `sprites.create`
- In parentheses, add a pre-made image by calling `"""happy"""`
- after a comma, make the sprite a player kind by adding `SpriteKind.player`
When you begin typing the call code `sprites.create` indented in the nextemoji() function, a popup should allow you to click to finish the code.
![Sprite initializing with popup to complete the code.](https://raw.githubusercontent.com/PomPomMom/Images/5d7ea68c31ab68517b403e690cee94b6c796d8ee/Create%20sprite%20python%20makecode%20arcade.png)


```python
    def nextEmoji():

    happy = sprites.create(assets.image(""" happy """), SpriteKind.player)
 ```

## **Step 7: Add an Image to your Sprite Variable.**
When you have initialized your sprite, a paint palate icon will appear next to your code. Click on it.
![Paint palate icon next to sprite code](https://github.com/PomPomMom/Images/blob/5d7ea68c31ab68517b403e690cee94b6c796d8ee/Image%20chooser.png?raw=true)

At the top, choose "My Assets" and pick the happy face emoji. Then click Done in the bottom left corner.
```happy = sprites.create(assets.image("""Happy"""), SpriteKind.player)```


## **Step 8: Add two more sprites**
Add two more sprites using the same procedure as before, but give `sad` the `sad` image and `angry` the `angry` image.

```
    sad = sprites.create(assets.image("""
        sad
    """), SpriteKind.player)
    angry = sprites.create(assets.image("""
        angry
    """), SpriteKind.player)
```
## **Complete!**
You have started your emoji game and learned about variables! Continue in the next activity to add conditionals to your game.
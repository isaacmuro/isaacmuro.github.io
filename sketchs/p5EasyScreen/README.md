# p5EasyScreen

p5EasyScreen is a simple serverless solution to screen p5.js sketches sequentially during determined time. For educational purposes, it can screen all the class sketches to show them. This solution uses the localStorage to share the sketches code between the tabs.

# How this work:

1. Select the sketches you want to screen with the file input. You can select more than one sketch files. When the files are selected, you will see a table with information about the files.

2. Decide how many seconds or minutes to show every sketch.

3. Open the display window or tab with the "open display button".
This tab is the screen where the sketches will be screened. It you project the sketches to the class, use this screen to show them.

4. To start showing the sketches, press the button "start".
When start button is pressed, the first sketch is send to the display tab and it is shown. You will see that the table with the sketches decreases. The first sketches that is send is erased from the list.

Every time the timeout is reached, another sketch code is send and the display tab is reloaded.

# Example

You can see this working [here](https://isaacmg.gitlab.io).

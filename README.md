# Tetris

> An implementation of Tetris, using JavaScript

<img src="https://user-images.githubusercontent.com/3531085/62006665-a58a4580-b13b-11e9-9487-25df8c869f5f.png">

Play online here: https://mickyginger.github.io/tetris/

## Technologies used

- HTML5
- CSS3
- ES6
- Webpack

## Approach

I created a `Tetronimo` class which knew how to move and rotate, and would check for valid moves and know when it had _settled_, ie could not fall any more.

I then created a `Game` class which is responsible for generating and dropping random Tetronimos, clearing lines and awarding points.

The main `app.js` file is responsible for interacting with the DOM, generating the grid, and instantiating the other classes.

Each Tetronimo is created from an array of indexes. For example the Z shape would be:

```
[0, 1, 11, 12]
```

where the grid is 10 cells wide. These indexes are mapped on to the game board, using a starting index. So for example if the starting index were 4, the Tetronimo would be drawn on cells with the following indexes:

```
[4, 5, 15, 16]
```

| 0 | 1 | 2 | 3 | <span style="color:orange;">■</span> | <span style="color:orange">■</span> | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| **10** | **11** | **12** | **13** | **14** | **<span style="color:orange">■</span>** | **<span style="color:orange">■</span>** | **17** | **18** | **19** |

To move the Tetronimo, each index in the array is modified. So to move down, 10 is added to each index. To move left 1 is removed from each index, and to move right 1 is added.

## Challenges

The biggest challenge was probably the rotation. My solution was to give each Tetronimo a collection of indexes, each one describing a different orientation. So for example the Z shape would be:

```
[0, 1, 11, 12]
[1, 10, 11, 20]
```

To rotate the Tetronimo, the array used as the shape's template is toggled when the user presses the space bar.

While this is a reasonable solution, it is not ideal. At the moment when rotating the T shape it also moves crabwise across the screen.


## Contributing

Please fork the repo and make a pull request.

If you'd rather just take the code and develop it please credit me and drop me a link to your repo, I'd love to take a look!

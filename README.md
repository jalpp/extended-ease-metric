## Extended Ease Metric Chess Formula

the below formula is my work on extending the original chess ease metric formula written by [@matstc](https://lichess.org/@/matstc) on the Google collab [here](https://colab.research.google.com/drive/1LEXjH18A34lkZw2qwHIV0AwNuJrjLBGR)

## Extended Ease Metric (1)

This formula integrates Stockfish, ChessDB and makes the formula computable on user's browser by reducing computation and also finding hard positions in a chess game via ploting a line graph. Please read more about it on Lichess blog [here](https://lichess.org/@/Noobmasterplayer123/blog/extended-ease-metric-1/zx7jpzMF)

## Extended Ease Metric (2) Variation Ease

This formula analysis how any chess variation for given root chess position can be easy or not. It it my improvement on inital algorithm suggested by [@matstc](https://lichess.org/@/matstc) that reduces the computation time from ```O(n^3)``` to ```O(n)```

Please read more about it [here](https://lichess.org/@/Noobmasterplayer123/blog/extended-ease-metric-2-variation-ease/KD2z3pTa)

## Sample Code

The code that was discussed in the blogs is present in ```/easemetric``` its plain Typescript objects without any dependeny. 


## Extended Ease Metric License

My implementation is under GPL-v3, see the license for more details.


## Authors:

@jalpp @matstc
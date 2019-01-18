#!/bin/bash
LOW=60
MEDIUM=92
HIGH=100

# ref: https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433

# Bulma Breakpoints
#     mobile | up to 768px (+) | => sm
#     tablet | from 769px  (+) | => md
#    desktop | from 1024px (+) | => lg
# widescreen | from 1216px (-) |
#     fullhd | from 1408px (-) |

# Largura original: 2547 pixels
# lg | 2x | 2547 | é o tamanho máximo (=original)
# sm | 1x | 769  | Bulma mobile-tablet breakpoint
# md | 1x | 1024 | Bulma tablet-desktop breakpoint
# lg | 1x | 2547 | mantive tamanho original porque não é muito grande
# sm | 2x | 1538 | sm 2x
# md | 2x | 2048 | md 2x

convert goro.png -quality $MEDIUM -resize 2547 output/goro-lg_2x.png
convert goro.png -quality $MEDIUM -resize 2547 output/goro-lg_1x.png
convert goro.png -quality $MEDIUM -resize 2048 output/goro-md_2x.png
convert goro.png -quality $MEDIUM -resize 1024 output/goro-md_1x.png
convert goro.png -quality $MEDIUM -resize 1538 output/goro-sm_2x.png
convert goro.png -quality $MEDIUM -resize 769  output/goro-sm_1x.png

convert goro.png -quality $MEDIUM -resize 2547 output/goro-lg_2x.jpg
convert goro.png -quality $MEDIUM -resize 2547 output/goro-lg_1x.jpg
convert goro.png -quality $MEDIUM -resize 2048 output/goro-md_2x.jpg
convert goro.png -quality $MEDIUM -resize 1024 output/goro-md_1x.jpg
convert goro.png -quality $MEDIUM -resize 1538 output/goro-sm_2x.jpg
convert goro.png -quality $MEDIUM -resize 769  output/goro-sm_1x.jpg

convert goro.png -quality $MEDIUM -resize 2547 output/goro-lg_2x.webp
convert goro.png -quality $MEDIUM -resize 2547 output/goro-lg_1x.webp
convert goro.png -quality $MEDIUM -resize 2048 output/goro-md_2x.webp
convert goro.png -quality $MEDIUM -resize 1024 output/goro-md_1x.webp
convert goro.png -quality $MEDIUM -resize 1538 output/goro-sm_2x.webp
convert goro.png -quality $MEDIUM -resize 769  output/goro-sm_1x.webp

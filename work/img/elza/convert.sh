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

# Largura original: 2560 pixels
# lg | 2x | 2560 | é o tamanho máximo (=original)
# sm | 1x | 769  | Bulma mobile-tablet breakpoint
# md | 1x | 1024 | Bulma tablet-desktop breakpoint
# lg | 1x | 1280 | lg 0.5x
# sm | 2x | 1538 | sm 2x
# md | 2x | 2048 | md 2x

function doit {
  convert $1.jpg -quality $MEDIUM -resize 2560 output/$1-lg_2x.jpg
  convert $1.jpg -quality $MEDIUM -resize 2048 output/$1-md_2x.jpg
  convert $1.jpg -quality $MEDIUM -resize 1538 output/$1-sm_2x.jpg
  convert $1.jpg -quality $MEDIUM -resize 1280 output/$1-lg_1x.jpg
  convert $1.jpg -quality $MEDIUM -resize 1024 output/$1-md_1x.jpg
  convert $1.jpg -quality $MEDIUM -resize 769  output/$1-sm_1x.jpg

  convert $1.jpg -quality $MEDIUM -resize 2560 output/$1-lg_2x.webp
  convert $1.jpg -quality $MEDIUM -resize 2048 output/$1-md_2x.webp
  convert $1.jpg -quality $MEDIUM -resize 1538 output/$1-sm_2x.webp
  convert $1.jpg -quality $MEDIUM -resize 1280 output/$1-lg_1x.webp
  convert $1.jpg -quality $MEDIUM -resize 1024 output/$1-md_1x.webp
  convert $1.jpg -quality $MEDIUM -resize 769  output/goro-sm_1x.webp

  echo "<picture> \
  <source media=\"(min-width: 1024px)\" srcset=\"images/carousel/$1-lg_1x.webp 1x, images/carousel/$1-lg_2x.webp 2x\" type=\"image/webp\"> \
  <source media=\"(min-width: 769px)\" srcset=\"images/carousel/$1-md_1x.webp 1x, images/carousel/$1-md_2x.webp 2x\" type=\"image/webp\"> \
  <source media=\"(max-width: 768px)\" srcset=\"images/carousel/$1-sm_1x.webp 1x, images/carousel/$1-sm_2x.webp 2x\" type=\"image/webp\"> \
  <source media=\"(min-width: 1024px)\" srcset=\"images/carousel/$1-lg_1x.jpg 1x, images/carousel/$1-lg_2x.jpg 2x\" type=\"image/jpg\"> \
  <source media=\"(min-width: 769px)\" srcset=\"images/carousel/$1-md_1x.jpg 1x, images/carousel/$1-md_2x.jpg 2x\" type=\"image/jpg\"> \
  <source media=\"(max-width: 768px)\" srcset=\"images/carousel/$1-sm_1x.jpg 1x, images/carousel/$1-sm_2x.jpg 2x\" type=\"image/jpg\"> \
  <img src=\"images/carousel/$1-lg_1x.jpg\" type=\"image/jpeg\" alt=\"$1\"> \
  </picture>"
}

doit 1985-pedra-grande-suzano
doit 1985-s-luis-do-paraitinga-sp
doit 1986-abr-fazenda-tres-barras-alto-caparao
doit 1993-jun-fundacao-shunji-nishimura
doit 1996-abr-faz-h-onoda
doit 1997-mar-ao-fundo-a-pedra-do-bau
doit 2001-abr-vila-de-maromba-rj
doit 2001-fev-assembleia-geral-do-cphn
doit 2001-nov-h-f-s-francisco-cunha

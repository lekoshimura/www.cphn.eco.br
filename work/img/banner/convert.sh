#!/bin/bash
LOW=40
MEDIUM=80
HIGH=100

# ref: 
# https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433
# https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/#what-is-mozjpeg
#   - q=80 or lower is fine for web content

# Bulma Breakpoints
#     mobile | up to 768px (+) | => sm
#     tablet | from 769px  (+) | => md
#    desktop | from 1024px (+) | => lg
# widescreen | from 1216px (-) |
#     fullhd | from 1408px (-) |

# Largura original: 2560px
# lg | 2x | 2560 | é o tamanho máximo (=original)
# sm | 1x | 769  | Bulma mobile-tablet breakpoint
# md | 1x | 1024 | Bulma tablet-desktop breakpoint
# lg | 1x | 2560 | mantive tamanho original porque não é muito grande
# sm | 2x | 1538 | sm 2x
# md | 2x | 2048 | md 2x

# png
convert banner.png -quality $HIGH -resize 2560 output/banner-lg_2x.png
convert banner.png -quality $HIGH -resize 2560 output/banner-lg_1x.png
convert banner.png -quality $HIGH -resize 2048 output/banner-md_2x.png
convert banner.png -quality $HIGH -resize 1024 output/banner-md_1x.png
convert banner.png -quality $HIGH -resize 1538 output/banner-sm_2x.png
convert banner.png -quality $HIGH -resize 769  output/banner-sm_1x.png

# webp
convert banner.png -quality $HIGH -resize 2560 output/banner-lg_2x.webp
convert banner.png -quality $HIGH -resize 2560 output/banner-lg_1x.webp
convert banner.png -quality $HIGH -resize 2048 output/banner-md_2x.webp
convert banner.png -quality $HIGH -resize 1024 output/banner-md_1x.webp
convert banner.png -quality $HIGH -resize 1538 output/banner-sm_2x.webp
convert banner.png -quality $HIGH -resize 769  output/banner-sm_1x.webp

# mozpeg
convert output/banner-lg_2x.webp PNM:- | cjpeg -quality $MEDIUM -outfile output/banner-lg_2x.jpg
convert output/banner-lg_1x.webp PNM:- | cjpeg -quality $MEDIUM -outfile output/banner-lg_1x.jpg
convert output/banner-md_2x.webp PNM:- | cjpeg -quality $MEDIUM -outfile output/banner-md_2x.jpg
convert output/banner-md_1x.webp PNM:- | cjpeg -quality $MEDIUM -outfile output/banner-md_1x.jpg
convert output/banner-sm_2x.webp PNM:- | cjpeg -quality $MEDIUM -outfile output/banner-sm_2x.jpg
convert output/banner-sm_1x.webp PNM:- | cjpeg -quality $MEDIUM -outfile output/banner-sm_1x.jpg
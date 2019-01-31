#!/bin/bash
LOW=60
MEDIUM=92
HIGH=100

# ref: https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433
# https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/#what-is-mozjpeg
#   - q=80 or lower is fine for web content

# Largura original: 2547 pixels
# Lagura no layout lg: ------------ 688px
# Lagura no layout md-landscape: -- 688px
# Lagura no layout md-portrait: --- 668px
# Lagura no layout sm-landscape: -- 636px
# Lagura no layout sm-portrait: --- 315px

# lg | 1x | 688   | layout
# lg | 2x | 1376  | lg 2x
# md | 1x | 688   | layout
# md | 2x | 1376  | md 2x
# sm | 1x | 315   | layout
# sm | 2x | 630   | sm 2x

#png
convert goro.png -quality $HIGH -resize 688 output/goro-lg_1x.png
convert goro.png -quality $HIGH -resize 1376 output/goro-lg_2x.png
convert goro.png -quality $HIGH -resize 688 output/goro-md_1x.png
convert goro.png -quality $HIGH -resize 1376 output/goro-md_2x.png
convert goro.png -quality $HIGH -resize 315  output/goro-sm_1x.png
convert goro.png -quality $HIGH -resize 360 output/goro-sm_2x.png

#webp
convert goro.png -quality $HIGH -resize 688 output/goro-lg_1x.webp
convert goro.png -quality $HIGH -resize 1376 output/goro-lg_2x.webp
convert goro.png -quality $HIGH -resize 688 output/goro-md_1x.webp
convert goro.png -quality $HIGH -resize 1376 output/goro-md_2x.webp
convert goro.png -quality $HIGH -resize 315  output/goro-sm_1x.webp
convert goro.png -quality $HIGH -resize 360 output/goro-sm_2x.webp

# mozpeg
convert output/goro-lg_1x.png PNM:- | cjpeg -quality $MEDIUM -outfile output/goro-lg_1x.jpg #688
convert output/goro-lg_2x.png PNM:- | cjpeg -quality $MEDIUM -outfile output/goro-lg_2x.jpg #1376
convert output/goro-md_1x.png PNM:- | cjpeg -quality $MEDIUM -outfile output/goro-md_1x.jpg #688
convert output/goro-md_2x.png PNM:- | cjpeg -quality $MEDIUM -outfile output/goro-md_2x.jpg #1376
convert output/goro-sm_1x.png PNM:- | cjpeg -quality $MEDIUM -outfile output/goro-sm_1x.jpg #315
convert output/goro-sm_2x.png PNM:- | cjpeg -quality $MEDIUM -outfile output/goro-sm_2x.jpg #360

# placeholder
convert output/goro-sm_1x.jpg -blur 50x50 -resize 100 output/goro-blur.jpg
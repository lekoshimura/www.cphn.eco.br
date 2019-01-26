#!/bin/bash
LOW=40
MEDIUM=80
HIGH=100

# ref: 
# https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433
# https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/#what-is-mozjpeg
#   - q=80 or lower is fine for web content
# https://roei.stream/2018/11/18/ideal-open-graph-image-size-for-whatsapp-link-share/
#   - facebook: 1200 x 630
#   - whatsapp: 400 x 400
# https://bulma.io/documentation/overview/responsiveness/
#     mobile | up to 768px (+) | => sm
#     tablet | from 769px  (+) | => md
#    desktop | from 1024px (+) | => lg
# widescreen | from 1216px (-) |
#     fullhd | from 1408px (-) |

# png
convert og-image.png -resize 1200 output/og-image.png

# mozpeg
convert output/og-image.png PNM:- | cjpeg -quality $MEDIUM -outfile output/og-image.jpg
convert output/og-image-facebook.jpg -resize 500x500 -gravity center -extent 400x400 output/og-image-whatsapp.jpg
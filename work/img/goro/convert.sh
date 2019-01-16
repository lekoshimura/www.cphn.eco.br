#!/bin/bash
SRC="$1"
LOW=60
HIGH=100
convert $SRC.png -quality $LOW output/"$SRC"_low.jpg
convert $SRC.png -quality $LOW output/"$SRC"_low.webp
convert $SRC.png -quality $LOW -resize 25% output/"$SRC"_"$LOW"q_25pc.jpg
convert $SRC.png -quality $LOW -resize 25% output/"$SRC"_"$LOW"q_25pc.webp
convert $SRC.png -quality $HIGH output/"$SRC"_high.jpg
convert $SRC.png -quality $HIGH output/"$SRC"_high.webp
convert $SRC.png -quality $HIGH -resize 25% output/"$SRC"_"$HIGH"q_25pc.jpg
convert $SRC.png -quality $HIGH -resize 25% output/"$SRC"_"$HIGH"q_25pc.webp

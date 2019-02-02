#!/bin/bash

convert $1 PNM:- | cjpeg -quality 80 -outfile output/$1
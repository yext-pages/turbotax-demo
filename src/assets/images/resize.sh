#!/bin/zsh


HEIGHT=300
WIDTHS=(1920 1440 1200 1024 768)
OFFSETS=(400 300 200 150 100)

JPEG_DEFINES=(-quality 90 -strip)
WEBP_DEFINES=(-quality 90 -define webp:method=6 -strip)

# cleanup
rm -rf stock_bg
mkdir stock_bg
touch stock_bg/index.ts;

# prep
length=${#WIDTHS[@]}
webpSrcSet=()
jpegSrcSet=()

# convert images
for (( i = 1; i <= length; i++ ));
do
  convert stock_bg.png -resize "${WIDTHS[$i]}x0^" -crop "${WIDTHS[$i]}x$HEIGHT+0+${OFFSETS[$i]}" +repage "${JPEG_DEFINES[@]}" "stock_bg/${WIDTHS[$i]}.jpeg"
  convert stock_bg.png -resize "${WIDTHS[$i]}x0^" -crop "${WIDTHS[$i]}x$HEIGHT+0+${OFFSETS[$i]}" +repage "${WEBP_DEFINES[@]}" "stock_bg/${WIDTHS[$i]}.webp"

  echo "import jpeg_${WIDTHS[$i]} from './${WIDTHS[$i]}.jpeg';" >> stock_bg/index.ts
  echo "import webp_${WIDTHS[$i]} from './${WIDTHS[$i]}.webp';" >> stock_bg/index.ts

  jpegSrcSet+=("\${jpeg_${WIDTHS[$i]}} ${WIDTHS[$i]}w")
  webpSrcSet+=("\${webp_${WIDTHS[$i]}} ${WIDTHS[$i]}w")
done

# write srcsets
function join_by { local IFS="$1"; shift; echo "$*"; }
echo "export const jpegSrcSet = \`$(join_by , "${jpegSrcSet[@]}")\`;" >> stock_bg/index.ts
echo "export const webpSrcSet = \`$(join_by , "${webpSrcSet[@]}")\`;" >> stock_bg/index.ts


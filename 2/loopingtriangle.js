// follows the directions but with quotes
for (var hashtagline = "#"; hashtagline.length < 8; hashtagline += "#")
  console.log(hashtagline);



// tried to print without quotes but doesn't work
hashtagline = ''
hashtagtriangle = hashtagline
for (var count = 0; count < 7; count++)
  hashtagtriangle = hashtagline += "#"
  console.log(hashtagtriangle);

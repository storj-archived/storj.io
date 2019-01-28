#!/bin/bash

declare -a classNames=("press-date" "press-source" "press-links" "press-titles")

fp="layouts/press/single.html"

links=()
titles=()
publishers=()
dates=()

for i in "${classNames[@]}" 
do
    touch $i.txt
done

cat $fp | grep "class=\"press-date\"" | cut -d ">" -f 2  | cut -d "<" -f 1 > press-date.txt

cat $fp | grep "class=\"press-source\"" | cut -d ">" -f 2  | cut -d "<" -f 1 > press-source.txt

cat $fp | grep "press-title" | cut -b 26- | cut -d "\"" -f -1 > press-links.txt

cat $fp | grep "press-title" | cut -b 26- | cut -d ">" -f 2 | cut -d "<" -f 1 > press-titles.txt

incrementer=0

while IFS='' read -r line || [[ -n "$line" ]]; do
            
    dates[$incrementer]=$line

    incrementer=$((incrementer+1))

done < press-date.txt

incrementer=0

while IFS='' read -r line || [[ -n "$line" ]]; do
            
    titles[$incrementer]=$line

    incrementer=$((incrementer+1))

done < press-titles.txt

incrementer=0

while IFS='' read -r line || [[ -n "$line" ]]; do
            
    publishers[$incrementer]=$line

    incrementer=$((incrementer+1))

done < press-source.txt

incrementer=0

while IFS='' read -r line || [[ -n "$line" ]]; do
            
    links[$incrementer]=$line

    incrementer=$((incrementer+1))

done < press-links.txt

for(( i = 0; i < 327; i = i + 1));do
	hugo new press/pressArticle$i.md
    echo -e "---\npublishedBy : ${publishers[$i]}" > content/press/pressArticle$i.md
    echo -e "publishedOn : ${dates[$i]}" >> content/press/pressArticle$i.md
    echo -e "link : ${links[$i]}" >> content/press/pressArticle$i.md
    echo -e "articleName : ${titles[$j]}" >> content/press/pressArticle$i.md
    echo -e "weight : $((i+1)) " >> content/press/pressArticle$i.md
    echo -e "class : pressArticle\n---" >> content/press/pressArticle$i.md
done

echo "script complete"

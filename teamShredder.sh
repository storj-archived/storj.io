#!/bin/bash

declare -a attributes=("headshots","titles","names")

fp="layouts/team/single.html"

headshots=()
titles=()
names=()

for i in "${attributes[@]}"
do  
    touch $i.txt
done

cat $fp | grep "src=" | cut -d "\"" -f 2 >  headshots.txt

cat $fp | grep "<h4 class=\"team-member-name\"" | cut -d ">" -f 2 | cut -d "<" -f 1 > names.txt

cat $fp | grep "<p class=\"team-member-title\"" | cut -d ">" -f 2 | cut -d "<" -f 1 > titles.txt 

incrementer=0

while IFS='' read -r line || [[ -n "$line" ]]; do
            
    headshots[$incrementer]=$line

    incrementer=$((incrementer+1))

done < headshots.txt

incrementer=0

while IFS='' read -r line || [[ -n "$line" ]]; do
            
    titles[$incrementer]=$line

    incrementer=$((incrementer+1))

done < titles.txt

incrementer=0

while IFS='' read -r line || [[ -n "$line" ]]; do
            
    names[$incrementer]=$line

    incrementer=$((incrementer+1))

done < names.txt

for(( i = 1; i <= 54; i = i + 1));do
	hugo new team/member$i.md
    echo -e "---\nname : ${names[$i]}" > content/team/member$i.md
    echo -e "title : ${titles[$i]}" >> content/team/member$i.md
    echo -e "headshot : ${headshots[$i]}" >> content/team/member$i.md
    echo -e "class : \n---" >> content/team/member$i.md
done

echo "script complete"
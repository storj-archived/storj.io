read -p "What hugo content dir?" dirName
read -p "Create iterations of what file name?" fileName
read -p "Create how many iterations of ${fileName}?" numOfFiles

files=()

for(( i = 1; i <= ${numOfFiles}; i = i + 1));do
	hugo new ${dirName}/${fileName}$i.md
	files[$i]=${dirName}/${fileName}$i.md 
done

echo "displaying contents of files array:"

for i in ${files[@]};do
	echo $i
done

read -p "how many lines of front matter would you like?" numLinesOfFrontMatter

front_matter_keys=()

for(( i = 1; i <= ${numLinesOfFrontMatter}; i = i + 1));do
	read -p "Front matter line $i key?" newKey
	read -p "Assign value to $newKey or press return to skip: " val
	front_matter_keys[$i]=$newKey" ":' "'$val'"'
done

for(( i = 1; i <= ${#files[@]}; i = i + 1));do
	for(( j = 1; j <= ${#front_matter_keys[@]}; j = j + 1));do

	if [ $j -eq 1 ]
		then
			echo -e "---\n${front_matter_keys[$j]}" > content/${files[$i]}

	elif [ $j -eq ${#front_matter_keys[@]} ]
		then
			echo -e "${front_matter_keys[$j]}\n---" >> content/${files[$i]}
	else
			echo -e "${front_matter_keys[$j]}" >> content/${files[$i]}
	fi

		done
	done

echo "Script complete"


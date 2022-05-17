#! /bin/bash

###################################################################
#Script Name	:   Replacer
#Description	:   Update the README.md file
#Args           :   None
#Author       	:   Antonio Pantaleo
#Email         	:   antonio_pantaleo@icloud.com
###################################################################

DATE=$(date +'%d\/%m\/%Y')
JOKE=$(curl https://v2.jokeapi.dev/joke/Programming?type=twopart)
QUESTION=$(jq .setup <<< $JOKE | sed 's/"//g')
ANSWER=$(jq .delivery <<< $JOKE | sed 's/"//g')

perl -i'' -pe "s/(?<=<\!-- script:start TODAY --> ).+(?= <\!-- script:end TODAY -->)/($DATE)/g" README.md
perl -i'' -0pe "s/(?<=<!-- script:start JOKE -->)[\w\W\s]*(?=<!-- script:end JOKE -->)/\n**$QUESTION**\n\n*$ANSWER*\n/ms" README.md

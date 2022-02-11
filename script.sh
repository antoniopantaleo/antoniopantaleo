#! bin/bash

DATE=$(date +'%d\/%m\/%Y')
JOKE=$(curl https://joke-of-the-day-api.herokuapp.com/joke-of-the-day)

QUESTION=$(jq .question <<< $JOKE | sed 's/"//g')
ANSWER=$(jq .answer <<< $JOKE | sed 's/"//g')

perl -i'' -pe "s/(?<=<\!-- script:start TODAY --> ).+(?= <\!-- script:end TODAY -->)/$DATE/g" README.md
perl -i'' -0pe "s/(?<=<!-- script:start JOKE -->)[\w\W\s]*(?=<!-- script:end JOKE -->)/\n**$QUESTION**\n\n*$ANSWER*\n/ms" README.md

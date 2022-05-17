#! /bin/bash

###################################################################
#Script Name	:   Birthday
#Description	:   Update the README.md file
#Args           :   None
#Author       	:   Antonio Pantaleo
#Email         	:   antonio_pantaleo@icloud.com
###################################################################

YEAR=$(date +'%Y')
AGE=$(($YEAR - 1996))

perl -i'' -pe "s/(?<=<\!-- script:start AGE --> ).+(?= <\!-- script:end AGE -->)/$AGE/g" README.md
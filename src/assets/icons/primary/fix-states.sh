#!/bin/bash

# Path to directory
DIR='states'

# String to replace
OLD='DFDFD8'

# New string
NEW='21262A'

# Perl command
CMD="s/${OLD}/${NEW}/g"

# Find and replace in all files within directory
find ${DIR} -type f -exec perl -pi -e "${CMD}" '{}' \;
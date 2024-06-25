#!/bin/bash

# Change directory to the desired path
cd /var/www/outsource/sec2-web/creative-template

# Function to check for local changes and push them
push_local_changes() {
    if [ -n "$(git status --porcelain)" ]; then
        echo "There are local changes. Committing and pushing..."
        # Discard changes in package-lock.json
        git checkout -- package-lock.json
        git add .
        git commit -m "$(date +'%Y-%m-%d %H:%M:%S') - auto"
        git push origin main
    fi
}

# Function to check if there are any updates
check_updates() {
    # Fetch the latest changes from the remote repository
    git fetch origin

    # Check if there are any new commits
    local_status=$(git rev-parse HEAD)
    remote_status=$(git rev-parse origin/main)

    if [ "$local_status" != "$remote_status" ]; then
        echo "There are updates available."
        
        # Check for local changes and push them if any
        push_local_changes

        # Check the difference between the local package.json and the one in the remote
        changes=$(git diff origin/main -- package.json)

        # Check if there are any changes in package.json
        if [ -n "$changes" ]; then
            echo "package.json has changed."
            # Optionally, you can print the changes
            echo "$changes"
            # Pull the latest changes
            git pull origin main
            # Run npm install
            npm i
        fi
        # Run npm build regardless of package.json changes
        npm run build
        # Restart pm2 process with id 5
        pm2 restart 5
    else
        echo "No updates available."
    fi
}

# Create a new screen session and run the check_updates function inside it
screen -dmS update_session bash -c "check_updates; screen -S update_session -X quit"

#!/bin/bash

# Define the source and destination paths
source_directory=$(pwd)  # Current working directory
package_name=$(node -pe "require('./package.json').name" | sed 's/^.*\///')  # Get the package name without the scope from package.json
destination_directory="$source_directory/node_modules/$package_name"

# Create the destination directory if it doesn't exist
mkdir -p "$destination_directory"

# Function to copy files and directories recursively
copy_directory() {
  local src="$1"
  local dest="$2"
  find "$src" -mindepth 1 -maxdepth 1 -exec cp -r {} "$dest" \;
}

# Copy the files and directories from the source to the destination
copy_directory "$source_directory" "$destination_directory"

# Remove the 'node_modules' directory and its contents from the destination
rm -rf "$destination_directory/node_modules"

echo "Git repository copied to node_modules successfully!"

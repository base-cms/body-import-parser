# Body Import Parser

## Installation
**Note:** _This repository requires **Docker Engine 18.06.0** or greater as Compose file format 3.7 is used._ All commands are assumed to be ran from the project root.

1. Clone the repository
2. Install the project dependencies via `scripts/yarn.sh`
3. Start the service via `docker-compose up app`
4. The service will now be running on `http://0.0.0.0:4986`

## Usage
Coming soon

## Managing Dependencies
Because this repository uses Docker, you should _not_ execute Yarn directly. Instead, execute Yarn commands using the provided script. For example, to add a dependency you would run `scripts/yarn.sh add [package-name]` from the project root. This works for all Yarn commands, e.g, `scripts/yarn.sh [command] [args]`

## Additional Scripts
You can execute an interactive terminal (inside the Docker container) via `scripts/terminal.sh`. You can also lint the entire project using `scripts/lint.sh`

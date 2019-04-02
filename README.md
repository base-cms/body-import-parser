# Body Import Parser
Cleans/extracts elements from content bodies. For use with content imports.

## Installation
**Note:** _This repository requires **Docker Engine 18.06.0** or greater as Compose file format 3.7 is used._ All commands are assumed to be ran from the project root.

1. Clone the repository
2. Install the project dependencies via `scripts/yarn.sh`
3. Start the service via `docker-compose up app`
4. The service will now be running on `http://0.0.0.0:4986`

## Usage
To run a cleanup/extraction on an HTML string, submit a `POST` request to the desired endpoint (see below). All requests MUST contain the `Content-Type: text/html` header and provide a raw HTML body (not a JSON body or a JSON encoded HTML body). This can be done via cURL, fetch, or any other tool (e.g. Insomnia). The server will return a JSON response with the extracted values and the HTML (the exact format varies depending on the rule).

**Note:** It is assumed that posted HTML will be encoded in UTF-8 (and will respond in-kind). As such, ensure character encoding conversions have been completed _before_ using this service.

### Available Endpoints
  - `/pennwell/default` See the rule's [documentation](https://github.com/base-cms/body-import-parser/tree/master/src/rules/pennwell) for more information.


## Managing Dependencies
Because this repository uses Docker, you should _not_ execute Yarn directly. Instead, execute Yarn commands using the provided script. For example, to add a dependency you would run `scripts/yarn.sh add [package-name]` from the project root. This works for all Yarn commands, e.g, `scripts/yarn.sh [command] [args]`

## Additional Scripts
You can execute an interactive terminal (inside the Docker container) via `scripts/terminal.sh`. You can also lint the entire project using `scripts/lint.sh`

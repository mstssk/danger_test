import {warn, danger} from "danger"

// const modifiedMD = danger.git.modified_files.join("- ")
// message("Changed Files in this PR: \n - " + modifiedMD)

console.log(danger.github);
if (danger.github.requested_reviewers.length === 0) {
    warn(`レビュアーを設定してください。`);
}

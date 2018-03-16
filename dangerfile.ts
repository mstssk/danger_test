import {warn, danger} from "danger"

// const modifiedMD = danger.git.modified_files.join("- ")
// message("Changed Files in this PR: \n - " + modifiedMD)

const pr = danger.github.pr;

if (!pr.title.includes('WIP') && pr.requested_reviewers.length === 0) {
    warn(`レビュアーを設定してください。`);
}

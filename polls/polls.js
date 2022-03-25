import { savePoll, getPolls, logout, checkLoggedIn } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

checkLoggedIn();

const questionEl = document.querySelector('.question');
const options1TitleEl = document.querySelector('.option-1-title');
const options1VotesEl = document.querySelector('.option-1-votes');
const options1ButtonEl = document.querySelector('.option-1-button');
const options2TitleEl = document.querySelector('.option-2-title');
const options2VotesEl = document.querySelector('.option-2-votes');
const options2ButtonEl = document.querySelector('.option-2-button');
const finishButtonEl = document.querySelector('.finish-button');
const pastPollsEl = document.querySelector('.past-polls');
const pollFormEl = document.querySelector('#poll-form');
const logoutButtonEl = document.querySelector('#logout');

let question = '';
let option1Title = '';
let option1Votes = 0;
let option2Title = '';
let option2Votes = 0;

// - on load, 
//   - go fetch all this user's past polls 
//   - display them
window.addEventListener('load', async () => {
    await displayPolls();
});

logoutButtonEl.addEventListener('click', async () => {
    await logout();
});

// - On submit add question and options
pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollFormEl);

    question = data.get('question');
    option1Title = data.get('option-1-title');
    option1Votes = data.get('option-1-votes');
    option2Title = data.get('option-2-title');
    option2Votes = data.get('option-2-votes');

    questionEl.textContent = question;
    options1TitleEl.textContent = option1Title;
    options1VotesEl.textContent = option1Votes;
    options2TitleEl.textContent = option2Title;
    options2VotesEl.textContent = option2Votes;

    pollFormEl.reset();
});

// - On click vote
//   - increment the state of the vote for that option,
//   - then display the change
options1ButtonEl.addEventListener('click', () => {
    option1Votes++;

    options1VotesEl.textContent = option1Votes;
});

options2ButtonEl.addEventListener('click', () => {
    option2Votes++;

    options2VotesEl.textContent = option2Votes;
});

// - On click of Finish Poll
finishButtonEl.addEventListener('click', async () => {
    //   - Take the current poll state and add it to past polls IN SUPABASE!!!
    await savePoll(question, option1Title, option2Title, option1Votes, option2Votes);

    //   - Re-fetch the polls from supabase and redisplay the list (clear the list in the DOM, render, and append)
    displayPolls();
});

async function displayPolls() {
    const polls = await getPolls();

    pastPollsEl.textContent = '';
    for (let poll of polls) {
        const newPollEl = renderPoll(poll);

        pastPollsEl.append(newPollEl);
    }
}
export function renderPoll(poll) {
        // render and append
    const newPollEl = document.createElement('div');
    const newQuestionEl = document.createElement('p');
    const newOptionOneEl = document.createElement('p');
    const newOptionTwoEl = document.createElement('p');
    const newVotesOneEl = document.createElement('p');
    const newVotesTwoEl = document.createElement('p');

    newPollEl.classList.add('poll');
    newQuestionEl.textContent = poll.question;
    newOptionOneEl.textContent = poll.option_1;
    newOptionTwoEl.textContent = poll.option_2;
    newVotesOneEl.textContent = poll.votes_1;
    newVotesTwoEl.textContent = poll.votes_2;

    newPollEl.append(
        newQuestionEl,
        newOptionOneEl,
        newVotesOneEl,
        newOptionTwoEl,
        newVotesTwoEl,);

    return newPollEl;
}
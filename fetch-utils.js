/* eslint-disable no-console */
// this key is the 'anonymous key'. it's okay to expose it publicly as long as we setup 'rls' security in our database
// a key is kind of like a password
// this was assigned to us by supabase for this project
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

export async function getUser() {
    return client.auth.user();
}

export function checkLoggedIn() {
    if (!client.auth.session()) {
        window.location = '../';
    }
}

// similarly, here's the url supabase assigned us for our database
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';

// finally, here's the client object. this object is how we will get data from our database
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export async function signUp(realEmail, realPassword) {
    // this should log out undefined, since nobody is logged in and there is no token tobe found
    console.log('before sign up', client.auth.user());

    //   - consult the supabase docs to find:
    const response = await client.auth.signUp({
        email: realEmail,
        password: realPassword,
    });

    // this should log in information about the user we just signed up, since there will now be a token around
    console.log('after sign up', client.auth.user());

    return response.user;
}

export async function savePoll(question, option1, option2, votes1, votes2) {
    const response = await client
        .from('polls')
        .insert([
            {   
                question,
                option_1: option1,
                option_2: option2,
                votes_1: votes1,
                votes_2: votes2,
            },
        ]);

    return response.data;
}

export async function getPolls() {
    const response = await client
        .from('polls')
        .select();

    return response.data;
}
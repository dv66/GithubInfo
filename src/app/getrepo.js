


// const Octokit = require('@octokit/rest')
// const octokit = new Octokit({
//     // auth: {
//     //     username: 'dv66',
//     //     password: '.Heydipto9396',
//     //     async on2fa () {
//     //         // example: ask the user
//     //         return prompt('Two-factor authentication Code:')
//     //     }
//     // }
//     auth:'dv66' 
// })

// async function getRepos(){
//     let val = await octokit.repos.list()
//     console.log(val)
// }

// // getRepos();

// var nn = null;
// const data = octokit.repos.list().then(_ => console.log(_));
// // const data = new Octokit().repos.listForUser("dv66");






require('es6-promise').polyfill();
require('isomorphic-fetch');
 
fetch('https://api.github.com/users/Remian/repos')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });